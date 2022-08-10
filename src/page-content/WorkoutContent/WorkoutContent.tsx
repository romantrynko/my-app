import { Box, CircularProgress, Button } from '@mui/material';
import { useState } from 'react';

import useWorkoutContent from './useWorkoutContent';

import type { IExcercise, IQuestion } from '../../types/index';
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
  } = useWorkoutContent({ workout });

  const initTiming = (counter / initialCounters) * 100;

  return (
    <Box>
      <Box>Workout: {counter}</Box>
      <CircularProgress size={80} color="info" variant="determinate" value={initTiming} />
      <Button variant="contained" onClick={isPause ? resumeTimer : pauseTimer}>
        {isPause ? 'Start' : 'Pause'}
      </Button>
    </Box>
  );
};

export default WorkoutContent;
