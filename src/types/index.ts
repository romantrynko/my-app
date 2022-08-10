export interface IExcercise {
  id: number;
  title: string;
  description: string;
  duration: number;
  photo: string;
  video: string;
}

export interface IMusclegroup {
  name: string;
  photo: string;
}

export interface IQuestion {
  title: string;
  exercises: IExcercise[];
  muscle_group: IMusclegroup;
}

export interface IWorkout {
  name: string;
  slug: string;
  questions: IQuestion[];
}

export interface IWorkoutsResponse {
  data: IWorkout;
}
