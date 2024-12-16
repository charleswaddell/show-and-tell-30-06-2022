import { NumToTuple } from './NumToTuple';

/*
// Original Add type. For an unknown reason to me this type
// would cause issues in the Multiply type. The complier would
// complain that the call to Add<> does not satisfy the number
// constraint.
export type Add<Num1 extends number, Num2 extends number> = [
  ...NumToTuple<Num1>,
  ...NumToTuple<Num2>
]['length'];
*/

// Modified Add type. This function would make the complier happy.
// It seems to be something with the complier being unable to infer
// that ['length'] is going to be a number until it knows that T1 and
// T2 are symbol arrays.
export type Add<
  Num1 extends number,
  Num2 extends number
> = NumToTuple<Num1> extends infer T1
  ? NumToTuple<Num2> extends infer T2
    ? T1 extends symbol[]
      ? T2 extends symbol[]
        ? [...T1, ...T2]['length']
        : never
      : never
    : never
  : never;

/*
// Modified Add type. I tried to add the symbol[] contraints to
// their own function to see if this fixes anything but I get
// back to the original error about Add<> does not satisfy the
// number constraint.
type AddTuples<T1 extends symbol[], T2 extends symbol[]> = [
  ...T1,
  ...T2
]['length'];

export type Add<Num1 extends number, Num2 extends number> = AddTuples<
  NumToTuple<Num1>,
  NumToTuple<Num2>
>;
*/
