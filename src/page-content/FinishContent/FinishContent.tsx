import { Box } from '@mui/material';
import { styles } from './styles';

import FinishComponent from '@/components/FinishComponent';
import useWorkoutContent from '../WorkoutContent/useWorkoutContent';
import type { IFinishContentProps } from './types';

const FinishContent = ({ workout }: IFinishContentProps) => {
  const { exercises } = useWorkoutContent({ workout });

  console.log(exercises[0].duration);


  return (
    <Box sx={styles.root}>
      <FinishComponent totalTime={exercises[1].duration} />
    </Box>
  );
};

export default FinishContent;
