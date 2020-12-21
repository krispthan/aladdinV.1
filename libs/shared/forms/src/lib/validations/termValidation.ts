import * as yup from "yup";
export const termValidation = yup.boolean().test({
  name: "term",
  message: "Please accept our privacy agreement",
  test: function () {
    const { term } = this.parent;
    return term;
  },
});
