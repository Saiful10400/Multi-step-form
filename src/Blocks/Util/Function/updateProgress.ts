import initialFormData from "../../Storage/FormData";

const updateProgressFn = (fn: (v: number) => void) => {
  fn(100 / Object.keys(initialFormData).length);
};

export default updateProgressFn;
