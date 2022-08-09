export interface IExcercise {
  id: Number;
  titile: String;
  description: String;
  duration: Number;
  photo: String;
  video: String;
}

export interface IMusclegroup {
  name: String;
  photo: String;
}

export interface IQuestion {
  title: String;
  exercises: IExcercise[];
  muscle_group: IMusclegroup;
}

export interface IWorkout {
  name: String;
  slug: String;
  questions: IQuestion[];
}

export interface IWorkoutsResponse {
  data: IWorkout;
}
