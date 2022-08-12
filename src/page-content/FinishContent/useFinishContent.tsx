import useWorkoutContent from "../WorkoutContent/useWorkoutContent";
import type { IFinishContentProps } from "./types";

const useFinishContent = ({ workout }: IFinishContentProps) => {
  const { exercises } = useWorkoutContent({ workout });

  const totalTime = exercises.reduce((acc, exercise) => {
    return exercise.duration + acc
  }, 0)

  const totalMinutes = Math.floor((totalTime - 5) / 60);
  console.log(totalMinutes);


  return { totalMinutes };
}

export default useFinishContent;