import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useMemo } from 'react';

import { HeroCard } from '@/client/components';
import UserContext from '@/client/components/gates/AuthGate/AuthGateContext';
import ExerciseList from '@/client/components/lists/ExerciseList';
import { createLocalStorage } from '@/client/utils/storage';

import styles from './styles';
import useUser from './useUser';

import type { IHomeProps } from './types';
import type { IUserResponse } from '@/server/types';

const Home = ({ workout }: IHomeProps) => {
  const router = useRouter();
  const { removeUser } = useUser();

  const { questions } = workout;

  const handleLogout = useCallback(() => {
    removeUser();
    createLocalStorage().removeItem('user');
    router.push('/login');
  }, [removeUser, router]);

  const [user] = useContext(UserContext);

  return (
    <Box component="main" sx={styles.root}>
      <Box sx={styles.header}>
        {user && <Typography sx={styles.userName}>{user?.username}</Typography>}
        <Button variant="contained" onClick={handleLogout} sx={styles.logoutBtn}>
          Logout
        </Button>
      </Box>
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
