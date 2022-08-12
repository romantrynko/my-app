import { useTimer } from '@/hooks';
import { SkipNext, SkipPrevious, PlayArrow } from '@mui/icons-material';
import { Box, Button, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';

import ProgressBar from '../ProgressBar/ProgressBar';

import { styles } from './styles';

import type { IWorkoutComponentProps } from './types';

export default function WorkoutComponent({
  activeExercise,
  handlePrev,
  handleNext,
}: IWorkoutComponentProps) {
  const { variant, photo, title, duration } = activeExercise;

  const { counter, resumeTimer, initValue } = useTimer(handleNext)
  
  useEffect(() => {
    initValue(activeExercise.duration)
  }, [initValue, activeExercise]);

  return (
    <>
      <Box sx={styles.header}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
      <Box sx={styles.navBar}>
        <Button variant="outlined" sx={[styles.prevButton, styles.btn]} onClick={handlePrev}>
          <SkipPrevious />
        </Button>
        <ProgressBar value={counter} total={duration} variant={variant} />
        <Button variant="outlined" sx={[styles.nextButton, styles.btn]} onClick={handleNext}>
          <SkipNext />
        </Button>
      </Box>
      <Box sx={styles.picture}>
        <Image src={photo} alt="exercisePhoto" width={800} height={474} />
      </Box>
      <Box sx={styles.footer}>
        <IconButton
          sx={styles.btnStart}
          onClick={resumeTimer}
        >
          <PlayArrow />
        </IconButton>
      </Box>
    </>
  );
}
