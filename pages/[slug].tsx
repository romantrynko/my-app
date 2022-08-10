import { WorkoutContent } from '@/page-content';
import { workoutsService } from '@/services';

import type { IWorkoutContentProps } from '@/page-content/WorkoutContent/types';

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
