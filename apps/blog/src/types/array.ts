export type ArrayElement<T> = T extends readonly (infer ElementType)[]
  ? ElementType
  : never
