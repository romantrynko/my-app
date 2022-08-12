import { useRouter } from 'next/router';
import { useMemo, useState, useCallback } from 'react';

import type { IExcercise, IQuestion } from '../../types/index';
import type { IWorkoutContentProps } from './types';

const firstStep = {
  id: 0,
  title: 'Get ready',
  duration: 5,
  photo: '/assets/image/image.png',
  description: '',
  video: '',
  variant: 'green',
};

const useWorkoutContent = ({ workout }: IWorkoutContentProps) => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

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

  const handleNext = useCallback(() => {
    if (index < exercises.length - 1) {
      setIndex(index + 1);
    } else {
      router.push('finish')
    }
  }, [exercises.length, index]);

  const handlePrev = useCallback(() => {
    if (index > 1) {
      setIndex(index - 1);
    }
  }, [index]);

  const hasPrevBtn = useMemo(() => index > 0, [index])
  const hasNextBtn = useMemo(() => index < exercises.length - 1, [exercises.length, index])

  const activeExercise = useMemo(() => exercises[index], [exercises, index]);

  return {
    handlePrev,
    handleNext,
    hasPrevBtn,
    hasNextBtn,
    activeExercise,
    exercises,
  };
};

export default useWorkoutContent;
