import { Box } from '@mui/material';

import { HeroCard } from '@/components';

import styles from './styles';
import useHome from './useHome';

const Home = () => {
  const { questions } = useHome();

  return (
    <Box component="main" sx={styles.root}>
      <HeroCard />
    </Box>
  );
};

export default Home;
