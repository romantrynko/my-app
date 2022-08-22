import { useEffect, useState } from 'react';

import { workoutsService } from '@/client/services';

import type { IQuestion } from '@/client/types';

const useHome = () => {
  const [questions, setQuestions] = useState<IQuestion[]>();

  useEffect(() => {
    workoutsService.get().then((data) => {
      setQuestions(data.questions ?? []);
    });
  }, []);

  return { questions };
};

export default useHome;
