type TupleToObject<T extends readonly (string | number)[]> = {
  [v in T[number]]: v;
};
