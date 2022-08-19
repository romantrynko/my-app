import LoginContent from '@/client/page-content/LoginContent';
import { AuthAccessLevel } from '@/client/types';

const Login = () => {
  return <LoginContent />;
};

export async function getServerSideProps() {
  return {
    props: {
      auth: {
        accessLevel: AuthAccessLevel.Unauthorized,
      },
    },
  };
}

export default Login;
