import { useCallback, useState, useRef, useEffect } from 'react';

const useTimer = (initDuration?: number) => {
  const initialCounters = initDuration ?? 0;
  const [counter, setCounter] = useState(initialCounters);
  const initial = useRef(initialCounters);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const [isPause, setIsPause] = useState(true);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCounter(initialCounters);
    setIsPause(true);
  }, [initialCounters]);

  const startTimer = useCallback(
    (seconds = initial.current) => {
      intervalRef.current = setInterval(() => {
        const newCounter = --seconds;
        if (newCounter >= 0) {
          setCounter(newCounter);
        } else {
          stopTimer();
        }
      }, 1000);
    },
    [stopTimer],
  );

  const pauseTimer = useCallback(() => {
    setIsPause(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const resumeTimer = useCallback(() => {
    startTimer();
    setIsPause(false);
  }, [startTimer]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      stopTimer();
    }
    setCounter(initial.current);
    startTimer(initial.current - 1);
  }, [startTimer, stopTimer]);

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, [stopTimer]);

  return {
    counter,
    isPause,
    resetCounter: resetTimer,
    stopTimer,
    pauseTimer,
    resumeTimer,
  };
};

export default useTimer;
