import { useCallback, useContext } from 'react';

import { authService } from '@/client/services';

import UserContext from '../../gates/AuthGate/AuthGateContext';

import { createLocalStorage } from './../../../utils/storage/index';

import type { FormikHelpers } from 'formik';

const useLoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const [, setUser] = useContext(UserContext);

  const handleSubmit = useCallback(
    (values: typeof initialValues, helper: FormikHelpers<typeof initialValues>) => {
      authService
        .login(values)
        .then((data) => {
          setUser(data);
          createLocalStorage().setItem('user', data);
        })
        .catch(({ response }) => {
          if (response.data) {
            helper.setFieldError('password', response.data);
          }
        })
        .finally(() => helper.setSubmitting(false));
    },
    [setUser],
  );

  return { initialValues, handleSubmit };
};

export default useLoginForm;
