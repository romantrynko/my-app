import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

import { HeroCard } from '@/client/components';
import ExerciseList from '@/client/components/lists/ExerciseList';

import styles from './styles';

import type { IHomeProps } from './types';

const Home = ({ workout }: IHomeProps) => {
  const { questions } = workout;

  const router = useRouter();

  return (
    <Box component="main" sx={styles.root}>
      <HeroCard
        photo={'/assets/image/image.png'}
        title={'Morning Flexibility Routine'}
        subtitle={'Easy • 15 min • No equipment '}
        caption={'Day 1'}
      />
      {questions?.map((question, index) => (
        <ExerciseList question={question} key={index} />
      ))}
      <Button variant="contained" sx={styles.btn} onClick={() => router.push(workout.slug)}>
        Start Workout
      </Button>
    </Box>
  );
};

export default Home;
