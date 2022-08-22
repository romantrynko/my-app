import type { IExcercise } from '@/client/types';

export interface IWorkoutComponentProps {
  activeExercise: IExcercise;
  handleNext: () => void;
  handlePrev: () => void;
  hasNextBtn: boolean;
  hasPrevBtn: boolean;
  exercises: IExcercise[];
}
