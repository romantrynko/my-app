import type { IUser, IUserResponse } from '@/server/types';

export const UserResponse = ({ id, username }: IUser): IUserResponse => ({ id, username });
