import * as yup from "yup";

export const nameValidation = yup
  .string()
  .max(26, "Max characters is 25.")
  .required("Name is required.");
