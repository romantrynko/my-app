import { Button, Grid, TextField } from '@mui/material';
import { Formik, Form } from 'formik';

import { loginSchema } from './schema';
import { styles } from './styles';
import useLoginForm from './useLoginForm';

const LoginForm = () => {
  const { initialValues, handleSubmit } = useLoginForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnBlur
      validationSchema={loginSchema}
    >
      {({ values, errors, handleChange, handleBlur, isSubmitting }) => {
        return (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  label="User Name"
                  error={Boolean(errors.username)}
                  helperText={errors?.username ?? ' '}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  fullWidth
                ></TextField>
                <TextField
                  variant="filled"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  label="Password"
                  error={Boolean(errors.password)}
                  helperText={errors?.password ?? ' '}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item display="flex" justifyContent="center" xs={12}>
                <Button sx={styles.btn} disabled={isSubmitting} variant="outlined" type="submit">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
