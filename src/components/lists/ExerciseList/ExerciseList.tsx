import { Box, Typography } from '@mui/material';

import { ExerciseCard } from '@/components';

import styles from './styles';

import type { IExerciseListProps } from './types';

const ExerciseList = ({ question }: IExerciseListProps) => {
  const { exercises, title } = question;

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>{title}</Typography>
      <Box component="ul" sx={styles.list}>
        {exercises.map((exercise) => (
          <Box component="li" key={exercise.id} sx={styles.listItem}>
            <ExerciseCard exercise={exercise} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExerciseList;
