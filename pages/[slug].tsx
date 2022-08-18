import { WorkoutContent } from '@/client/page-content';
import { workoutsService } from '@/client/services';

import type { IWorkoutContentProps } from '@/client/page-content/WorkoutContent/types';

const Workout = ({ workout }: IWorkoutContentProps) => {
  return <WorkoutContent workout={workout} />;
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

export default Workout;
