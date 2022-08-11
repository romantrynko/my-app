import { CircularProgress, Typography, Box, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

import { theme } from '@/constants';

import { styles } from './styles';

import type { IProgressBarType } from './types';

const ProgressBar = ({ value, variant = 'red', total, sx }: IProgressBarType) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const computedValue = useMemo(() => {
    if (value > 0 && value < 10) {
      return `0${value}`;
    }
    return value;
  }, [value]);

  return (
    <Box sx={styles.root}>
      <CircularProgress
        sx={styles.progress(variant)}
        variant="determinate"
        value={(value / total) * 100}
        size={isDesktop ? 128 : 96}
      />
      <Typography sx={styles.label(variant)}>{computedValue}</Typography>
    </Box>
  );
};

export default ProgressBar;
