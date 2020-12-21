import * as yup from "yup";
export const descriptionValidation = yup
  .string()
  .max(250, "Max characters is 25.")
  .required("Name is required.");
