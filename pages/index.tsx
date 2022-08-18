import { HomeContent } from '@/client/page-content';
import { workoutsService } from '@/client/services';

import type { IHomeProps } from '@/client/page-content/Home/types';

const Home = ({ workout }: IHomeProps) => {
  return <HomeContent workout={workout} />;
};

export const getServerSideProps = async () => {
  try {
    const workout = await workoutsService.get();
    return {
      props: { workout },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home;
