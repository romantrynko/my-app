import { apiClient } from './../utils/client/index';

type ILoginRequest = {
  password: string;
  username: string;
};

const login = (params: ILoginRequest) =>
  apiClient.post('/auth/login', params).then(({ data }) => data);

const authService = { login };

export default authService;
