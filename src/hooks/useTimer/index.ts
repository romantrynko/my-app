import { useCallback, useState, useRef, useEffect } from 'react';

import type { IExcercise } from './../../types/index';

const useTimer = (cb?: () => void, exercises?: IExcercise[]) => {
  const [counter, setCounter] = useState(0);
  const initial = useRef(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const [isPause, setIsPause] = useState(true);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsPause(true);
  }, []);

  const startTimer = useCallback(
    (seconds = initial.current) => {
      intervalRef.current = setInterval(() => {
        const newCounter = --seconds;
        if (newCounter >= 0) {
          setCounter(newCounter);
        } else {
          stopTimer();
          cb?.();
        }
      }, 1000);
    },
    [cb, stopTimer],
  );

  const pauseTimer = useCallback(() => {
    setIsPause(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    initial.current = counter;
  }, [counter]);

  const resumeTimer = useCallback(() => {
    startTimer();
    setIsPause(false);
  }, [startTimer]);

  const resetTimer = useCallback(() => {
    stopTimer();
    setCounter(initial.current);
  }, [stopTimer]);

  const initValue = useCallback(
    (val: number) => {
      stopTimer();
      setCounter(val);
      initial.current = val;

      resumeTimer();
    },
    [resumeTimer, stopTimer],
  );

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, [resetTimer, stopTimer]);

  return {
    counter,
    isPause,
    resetTimer,
    stopTimer,
    pauseTimer,
    resumeTimer,
    initValue,
  };
};

export default useTimer;
