import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import styles from './styles';

import type { IExerciseCardProps } from './types';

const ExerciseCard = ({ exercise }: IExerciseCardProps) => {
  const { title, duration, photo } = exercise;
  return (
    <Box sx={styles.card}>
      <Box sx={styles.imageWrapper}>
        <Image src={photo} layout="fill" alt="image" />
      </Box>
      <Box sx={styles.cardBody}>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.caption}>{duration} sec</Typography>
      </Box>
    </Box>
  );
};

export default ExerciseCard;
