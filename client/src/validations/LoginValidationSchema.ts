import * as yup from "yup";

export const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .min(3),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "password should contain at least 8 symbols")
    .max(20, "password should not be greater than 20 symbols"),
});
