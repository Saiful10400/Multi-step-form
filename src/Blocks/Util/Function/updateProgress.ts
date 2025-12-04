const updateProgressFn = (fn: (v: number) => void) => {
  fn(100 / 12);
};

export default updateProgressFn;
