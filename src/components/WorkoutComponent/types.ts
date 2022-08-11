import type { IExcercise } from '@/types';

export interface IWorkoutComponentProps {
  activeExercise: IExcercise;
  handleNext: () => void;
  handlePrev: () => void;
  timer: number;
  resumeTimer: () => void;
}
