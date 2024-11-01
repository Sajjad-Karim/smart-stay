// signupSchema.js
import * as Yup from "yup";

const signupSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  gender: Yup.string().required("Please select a gender"),
});

export default signupSchema;
