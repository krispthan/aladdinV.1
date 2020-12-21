import * as yup from "yup";
export const tagValidation = yup
  .string()
  .max(26, "Max characters is 64.")
  .required("Tag is required.");
