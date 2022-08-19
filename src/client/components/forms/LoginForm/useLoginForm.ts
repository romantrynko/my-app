import { useCallback } from 'react';

import { authService } from '@/client/services';

import type { FormikHelpers } from 'formik';

const useLoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = useCallback(
    (values: typeof initialValues, helper: FormikHelpers<typeof initialValues>) => {
      authService
        .login(values)
        .then((data) => console.log(data))
        .catch(({ response }) => {
          if (response.data) {
            helper.setFieldError('password', response.data);
          }
        })
        .finally(() => helper.setSubmitting(false));
    },
    [],
  );

  return { initialValues, handleSubmit };
};

export default useLoginForm;
