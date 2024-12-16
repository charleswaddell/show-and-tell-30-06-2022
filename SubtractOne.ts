import { NumToTuple } from './NumToTuple';

export type SubtractOne<Num extends number> = NumToTuple<Num> extends [
  any,
  ...infer Tail
]
  ? Tail['length']
  : 0;
