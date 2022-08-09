import { client } from '@/utils';

const get = () => client.get('/quizzes/workouts').then(({ data }) => data.data);

const workoutsService = {
  get,
};

export default workoutsService;
