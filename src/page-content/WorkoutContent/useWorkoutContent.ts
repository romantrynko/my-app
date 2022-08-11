import { useMemo, useState, useCallback } from 'react';

import { useTimer } from '@/hooks';

import type { IExcercise, IQuestion } from '../../types/index';
import type { IWorkoutContentProps } from './types';

const firstStep = {
  id: 0,
  title: 'Get ready',
  duration: 5,
  photo: '',
  description: '',
  video: '',
};

const useWorkoutContent = ({ workout }: IWorkoutContentProps) => {
  const [index, setIndex] = useState(0);

  const exercises = useMemo(
    () =>
      workout.questions.reduce(
        (acc: IExcercise[], question: IQuestion) => {
          return [...acc, ...question.exercises];
        },
        [{ ...firstStep }] as IExcercise[],
      ),
    [workout.questions],
  );

  const handlePrev = useCallback(() => {
    if (index < exercises.length - 1) {
      setIndex(index + 1);
    }
    return;
  }, [exercises.length, index]);

  const handleNext = useCallback(() => {
    if (index > 0) {
      setIndex(index - 1);
    }
    return;
  }, [index]);

  const activeExercise = useMemo(() => exercises[index], [exercises, index]);

  const { ...timer } = useTimer(activeExercise?.duration || 5);

  return {
    ...timer,
    handlePrev,
    handleNext,
    activeExercise,
  };
};

export default useWorkoutContent;
