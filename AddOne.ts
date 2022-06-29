import {
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  Fifteen,
  TooBig,
} from './Number';

export type AddOne<Num> = Num extends Zero
  ? One
  : Num extends One
  ? Two
  : Num extends Two
  ? Three
  : Num extends Three
  ? Four
  : Num extends Four
  ? Five
  : Num extends Five
  ? Six
  : Num extends Six
  ? Seven
  : Num extends Seven
  ? Eight
  : Num extends Eight
  ? Nine
  : Num extends Nine
  ? Ten
  : Num extends Ten
  ? Eleven
  : Num extends Eleven
  ? Twelve
  : Num extends Twelve
  ? Thirteen
  : Num extends Thirteen
  ? Fourteen
  : Num extends Fourteen
  ? Fifteen
  : TooBig;
