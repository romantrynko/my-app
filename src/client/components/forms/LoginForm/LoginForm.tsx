import { Box, Button, Grid, TextField } from '@mui/material';
import { Formik, Form } from 'formik';

import { loginSchema } from './schema';
import { styles } from './styles';

const LoginForm = () => (
  <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={(values) => console.log(values)}
    validateOnBlur
    validationSchema={loginSchema}
  >
    {({ values, errors, handleChange, handleBlur, isSubmitting }) => (
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="username"
              value={values.username}
              onChange={handleChange}
              label="User Name"
              error={Boolean(errors.username)}
              helperText={errors?.username ?? ' '}
              onBlur={handleBlur}
              fullWidth
            ></TextField>
            <TextField
              name="password"
              value={values.password}
              onChange={handleChange}
              label="Passsword"
              error={Boolean(errors.password)}
              helperText={errors?.password ?? ' '}
              onBlur={handleBlur}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item display="flex" justifyContent="center" xs={12}>
            <Button color="success" variant="outlined" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
