import { Add } from './Add';
import { SubtractOne } from './SubtractOne';
import { Zero } from './Number';

export type Multiply<Num1, Num2> = Num2 extends Zero
  ? Zero
  : Add<Num1, Multiply<Num1, SubtractOne<Num2>>>;
