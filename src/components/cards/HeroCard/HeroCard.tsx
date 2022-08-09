import { Box } from '@mui/material';
import Image from 'next/image';

import styles from './styles';

const HeroCard = () => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.imageWrapper}>
        <Image src="/assets/image/image.png" height={211} width={375} alt="image" />
      </Box>
    </Box>
  );
};

export default HeroCard;
