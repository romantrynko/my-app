import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import styles from './styles';

import type { IHeroCardProps } from './types';

const HeroCard = ({ photo, caption, title, subtitle }: IHeroCardProps) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.imageWrapper}>
        <Image src={photo} layout="fill" alt="image" />
      </Box>
      <Box sx={styles.cardBody}>
        <Typography sx={styles.caption}>{caption}</Typography>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.caption}>{subtitle}</Typography>
      </Box>
    </Box>
  );
};

export default HeroCard;
