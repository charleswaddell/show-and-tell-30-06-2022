import { SubtractOne } from './SubtractOne';

export type Subtract<Num1 extends number, Num2 extends number> = Num2 extends 0
  ? Num1
  : Subtract<SubtractOne<Num1>, SubtractOne<Num2>>;
