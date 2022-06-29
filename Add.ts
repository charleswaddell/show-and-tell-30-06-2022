import { Zero } from './Number';
import { AddOne } from './AddOne';
import { SubtractOne } from './SubtractOne';

export type Add<Num1, Num2> = Num2 extends Zero
  ? Num1
  : Add<AddOne<Num1>, SubtractOne<Num2>>;
