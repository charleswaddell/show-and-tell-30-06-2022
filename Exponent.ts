import { SubtractOne } from './SubtractOne';
import { Multiply } from './Multiply';
import { Zero, One } from './Number';

export type Exponent<Num1, Num2> = Num2 extends Zero
  ? One
  : Multiply<Num1, Exponent<Num1, SubtractOne<Num2>>>;
