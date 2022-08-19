import { useCallback } from 'react';

const useLoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = useCallback(
    (values: typeof initialValues, helper: FormikHelpers<typeof initialValues>) => {
      
     },
    [],
  );

  return { initialValues, handleSubmit };
};

export default useLoginForm;
