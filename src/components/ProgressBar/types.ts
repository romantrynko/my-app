import type { CircularProgressProps } from '@mui/material';

export interface IProgressBarType extends Pick<CircularProgressProps, 'sx'> {
  value: number;
  total: number;
  variant?: 'red' | 'green';
}
