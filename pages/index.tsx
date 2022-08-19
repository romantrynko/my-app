import { HomeContent } from '@/client/page-content';
import { workoutsService } from '@/client/services';
import { AuthAccessLevel } from '@/client/types';

import type { IHomeProps } from '@/client/page-content/Home/types';

const Home = ({ workout }: IHomeProps) => {
  return <HomeContent workout={workout} />;
};

export const getServerSideProps = async () => {
  try {
    const workout = await workoutsService.get();
    return {
      props: {
        workout,
        auth: {
          accessLevel: AuthAccessLevel.Authorized,
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home;
