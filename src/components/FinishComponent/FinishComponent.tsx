import { Box, Button, Typography } from '@mui/material';

import { styles } from './styles';

import type { IFinishComponentProps } from './types';
import Image from 'next/image';
import { useRouter } from 'next/router';

const FinishComponent = ({ totalTime }: IFinishComponentProps) => {
  const router = useRouter();

  return (
    <Box sx={styles.root}>
      <Image src='/assets/icons/check.png' width={55} height={55} alt='check'/>
      <Typography sx={styles.title} >Workout completed!</Typography>
      <Typography sx={styles.subtitle}>Nice job. You’re done. Here’s the workout summary.</Typography>
      <Typography sx={styles.minutes}>Minutes</Typography>
      <Typography sx={styles.totalTime}>{totalTime}</Typography>
      <Button variant="contained" sx={styles.btn} onClick={() => router.push('/')}>
        Save & Continue
      </Button>
    </Box>
  );
}

export default FinishComponent;
