// loginSchema.js
import * as Yup from 'yup';

const loginSchema = Yup.object({
  email: Yup.string().email().required('email is required'),
  password: Yup.string().required('Password is required'),
});

export default loginSchema;
