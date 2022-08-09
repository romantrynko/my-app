import { useEffect, useState } from 'react';

import { workoutsService } from '@/services';

import type { IQuestion } from '@/types';

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
