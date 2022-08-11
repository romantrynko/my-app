import { SkipNext, SkipPrevious, PlayArrow } from '@mui/icons-material';
import { Box, Button, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import ProgressBar from '../ProgressBar/ProgressBar';

import { styles } from './styles';

import type { IWorkoutComponentProps } from './types';

export default function WorkoutComponent({
  activeExercise,
  handlePrev,
  handleNext,
}: IWorkoutComponentProps) {
  const { photo, title, duration } = activeExercise;

  return (
    <>
      <Box sx={styles.header}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
      <Box sx={styles.navBar}>
        <Button variant="outlined" sx={[styles.prevButton, styles.btn]} onClick={handlePrev}>
          <SkipPrevious />
        </Button>
        <ProgressBar value={20} total={duration} />
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
          // onClick={isPause ? resumeTimer : pauseTimer}
        >
          <PlayArrow />
        </IconButton>
      </Box>
    </>
  );
}
