export type IUser = {
  id: number;
  username: string;
  password: string;
};

export type IUserResponse = Omit<IUser, 'password'>;
