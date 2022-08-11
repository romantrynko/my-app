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
    counter,
    isPause,
    resetCounter: resetTimer,
    stopTimer,
    pauseTimer,
    resumeTimer,
    initialCounters,
    activeExercise,
    handleNext,
    handlePrev
  } = useWorkoutContent({ workout });

  return (
    <Box sx={styles.root}>
      <WorkoutComponent timer={counter} activeExercise={activeExercise} handleNext={handleNext} handlePrev={handlePrev} resumeTimer={resumeTimer} />
    </Box>
  );
};

export default WorkoutContent;
