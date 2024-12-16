import { SubtractOne } from './SubtractOne';
import { Multiply } from './Multiply';

export type Exponent<
  Num1 extends number,
  Num2 extends number,
  Acc extends number = 1
> = Num2 extends 0
  ? Acc
  : Exponent<Num1, SubtractOne<Num2>, Multiply<Num1, Acc>>;
