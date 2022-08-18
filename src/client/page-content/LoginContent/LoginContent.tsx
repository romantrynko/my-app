import { Box, Card, CardContent, Typography } from '@mui/material';

import { LoginForm } from '@/client/components';

import styles from './styles';

const LoginContent = () => (
  <Box sx={styles.root}>
    <Card sx={styles.card}>
      <CardContent>
        <Typography sx={styles.title}>Login</Typography>
        <LoginForm />
      </CardContent>
    </Card>
  </Box>
);

export default LoginContent;
