import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { styles } from './styles';

const Modal = () => {
  const router = useRouter();

  return (
    <Box sx={styles.root}>
      <Typography sx={styles.title}>Workout paused</Typography>
      <Typography sx={styles.subtitle}>Press “Play button” or “Space bar” to continue</Typography>
      <Button variant="outlined" sx={styles.btn} onClick={() => router.push('/')}>
        leave workout
      </Button>
    </Box>
  );
};

export default Modal;
