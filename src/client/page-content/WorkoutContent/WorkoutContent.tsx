import { Box } from '@mui/material';

import WorkoutComponent from '@/client/components/WorkoutComponent';

import { styles } from './styles';
import useWorkoutContent from './useWorkoutContent';

import type { IWorkoutContentProps } from './types';

const WorkoutContent = ({ workout }: IWorkoutContentProps) => {
  const { activeExercise, handleNext, handlePrev, hasNextBtn, hasPrevBtn, exercises } =
    useWorkoutContent({
      workout,
    });

  return (
    <Box sx={styles.root}>
      <WorkoutComponent
        hasNextBtn={hasNextBtn}
        hasPrevBtn={hasPrevBtn}
        activeExercise={activeExercise}
        handleNext={handleNext}
        handlePrev={handlePrev}
        exercises={exercises}
      />
    </Box>
  );
};

export default WorkoutContent;
