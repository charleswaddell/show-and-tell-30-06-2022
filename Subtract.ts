import { Zero } from './Number';
import { SubtractOne } from './SubtractOne';

export type Subtract<Num1, Num2> = Num2 extends Zero
  ? Num1
  : Subtract<SubtractOne<Num1>, SubtractOne<Num2>>;
