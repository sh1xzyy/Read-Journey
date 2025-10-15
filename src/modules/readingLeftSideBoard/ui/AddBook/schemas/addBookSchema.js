import * as yup from "yup";

export const addBookSchema = yup.object().shape({
  page: yup
    .number()
    .typeError("Number of pages must be a number")
    .positive("Number of pages must be positive")
    .integer("Number of pages must be an integer")
    .required("Number of pages is required"),
});
