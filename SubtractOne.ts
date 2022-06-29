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
  TooSmall,
} from './Number';

export type SubtractOne<Num> = Num extends Fifteen
  ? Fourteen
  : Num extends Fourteen
  ? Thirteen
  : Num extends Thirteen
  ? Twelve
  : Num extends Twelve
  ? Eleven
  : Num extends Eleven
  ? Ten
  : Num extends Ten
  ? Nine
  : Num extends Nine
  ? Eight
  : Num extends Eight
  ? Seven
  : Num extends Seven
  ? Six
  : Num extends Six
  ? Five
  : Num extends Five
  ? Four
  : Num extends Four
  ? Three
  : Num extends Three
  ? Two
  : Num extends Two
  ? One
  : Num extends One
  ? Zero
  : TooSmall;
