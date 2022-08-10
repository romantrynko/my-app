import { useMemo, useState } from 'react';

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
  const [index, setIndex] = useState(1);

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

  const activeExercise = useMemo(() => exercises[index], [exercises, index]);

  const { ...timer } = useTimer(activeExercise?.duration || 5);

  return {
    ...timer,
    activeExercise,
  };
};

export default useWorkoutContent;
