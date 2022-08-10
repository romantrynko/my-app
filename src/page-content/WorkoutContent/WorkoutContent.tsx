import { Box, CircularProgress, Button } from '@mui/material';

import { useTimer } from '@/hooks';

import type { IWorkoutContentProps } from './types';
import { useState } from 'react';

const WorkoutContent = ({ workout }: IWorkoutContentProps) => {
  const [currentTiming, setCurrentTiming] = useState(5);

  const {
    counter,
    isPause,
    resetCounter: resetTimer,
    stopTimer,
    pauseTimer,
    resumeTimer,
  } = useTimer(currentTiming);

  console.log(counter);

  const initTiming = (counter / currentTiming) * 100;

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
