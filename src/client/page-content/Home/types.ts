import type { IWorkout } from '@/client/types';
import type { IUserResponse } from '@/server/types';

export interface IHomeProps {
  workout: IWorkout;
}

export type IUseUserProps = IUserResponse;
