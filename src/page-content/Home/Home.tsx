import { Box } from '@mui/material';

import { HeroCard } from '@/components';
import ExerciseList from '@/components/lists/ExerciseList';

import styles from './styles';
import useHome from './useHome';

const Home = () => {
  const { questions } = useHome();
  console.log(questions);

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
    </Box>
  );
};

export default Home;
