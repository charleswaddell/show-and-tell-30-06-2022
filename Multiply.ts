import { Add } from './Add';
import { SubtractOne } from './SubtractOne';

export type Multiply<
  Num1 extends number,
  Num2 extends number,
  Acc extends number = 0
> = Num2 extends 0 ? Acc : Multiply<Num1, SubtractOne<Num2>, Add<Num1, Acc>>;
