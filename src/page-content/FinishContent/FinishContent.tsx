import { Box } from '@mui/material';

import FinishComponent from '@/components/FinishComponent';

import { styles } from './styles';
import useFinishContent from './useFinishContent';

import type { IFinishContentProps } from './types';

const FinishContent = ({ workout }: IFinishContentProps) => {
  const { totalMinutes } = useFinishContent({ workout });

  return (
    <Box sx={styles.root}>
      <FinishComponent totalTime={totalMinutes} />
    </Box>
  );
};

export default FinishContent;
