import FinishContent from '@/page-content/FinishContent';
import type { IFinishContentProps } from '@/page-content/FinishContent/types';
import { workoutsService } from '@/services';

const Finish = ({workout}: IFinishContentProps) => {
  return <FinishContent workout={workout} />;
};

export const getServerSideProps = async () => {
  try {
    const workout = await workoutsService.get();
    return {
      props: { workout },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Finish;
