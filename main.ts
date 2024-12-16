import { Add } from './Add';
import { Exponent } from './Exponent';
import { Multiply } from './Multiply';
import { Subtract } from './Subtract';

// We can add 2 numbers
type R1 = Add<1, 2>; // 1 + 2

// We can subtract 2 numbers
type R2 = Subtract<3, 2>; // 3 - 2

// We can create compound expressions
type R3 = Add<Add<1, 2>, 3>; // (1 + 2) + 3
type R4 = Add<Add<1, 2>, Subtract<10, 1>>; // (1 + 2) + (10 - 1)

// Now we can go much larger than 15
type R5 = Add<123, 250>;

// We are still limit to positive numbers.
type R6 = Subtract<2, 10>; // What is 2 - 10 when our number system stops at 0?

// We can use previous results.
type R7 = Subtract<R5, R2>; // (123 + 250) - (3 - 2)

// We also have multiply and exponent.
type R8 = Multiply<3, 4>;
type R9 = Exponent<3, 4>;
