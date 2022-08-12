import { Box } from '@mui/material';
import { styles } from './styles';

import FinishComponent from '@/components/FinishComponent';
import type { IFinishContentProps } from './types';
import useFinishContent from './useFinishContent';

const FinishContent = ({ workout }: IFinishContentProps) => {
  const { totalMinutes } = useFinishContent({ workout });

  return (
    <Box sx={styles.root}>
      <FinishComponent totalTime={totalMinutes} />
    </Box>
  );
};

export default FinishContent;
