import { useTimer } from '@/hooks';
import { SkipNext, SkipPrevious, PlayArrow, Pause } from '@mui/icons-material';
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
  hasNextBtn,
  hasPrevBtn,
}: IWorkoutComponentProps) {
  const { id, variant, photo, title, duration } = activeExercise;

  const { counter, resumeTimer, pauseTimer, initValue, isPause } = useTimer(handleNext)

  useEffect(() => {
    initValue(activeExercise.duration)
  }, [initValue, activeExercise]);

  return (
    <>
      <Box sx={styles.header}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
      <Box sx={styles.navBar}>
        {hasPrevBtn && (<Button variant="outlined" sx={[styles.prevButton, styles.btn]} onClick={handlePrev}>
          <SkipPrevious />
        </Button>)}
        <ProgressBar value={counter} total={duration} variant={variant} />
        {hasNextBtn && (<Button variant="outlined" sx={[styles.nextButton, styles.btn]} onClick={handleNext}>
          <SkipNext />
        </Button>)}
      </Box>
      <Box sx={styles.picture}>
        <Image src={photo} alt="exercisePhoto" width={800} height={474} />
      </Box>
      {
        id !== 0 && <Box sx={styles.footer}>
          <IconButton onClick={isPause ? resumeTimer : pauseTimer}
            sx={styles.btnStart}
          >
            {isPause ? <PlayArrow /> : <Pause />}
          </IconButton>
        </Box>
      }

    </>
  );
}
