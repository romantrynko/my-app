import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

import { ExerciseCard } from '@/components';
import ProgressBar from '@/components/ProgressBar';
import WorkoutComponent from '@/components/WorkoutComponent';

import { styles } from './styles';
import useWorkoutContent from './useWorkoutContent';

import type { IWorkoutContentProps } from './types';

const WorkoutContent = ({ workout }: IWorkoutContentProps) => {
  const {
    activeExercise,
    handleNext,
    handlePrev,
    hasNextBtn,
    hasPrevBtn,
  } = useWorkoutContent({ workout });

  return (
    <Box sx={styles.root}>
      <WorkoutComponent hasNextBtn={hasNextBtn} hasPrevBtn={hasPrevBtn} activeExercise={activeExercise} handleNext={handleNext} handlePrev={handlePrev} />
    </Box>
  );
};

export default WorkoutContent;
