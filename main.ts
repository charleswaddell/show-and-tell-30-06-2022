import { Add } from './Add';
import { Subtract } from './Subtract';
import { One, Two, Three, Ten } from './Number';

// We can add two numbers
type R1 = Add<One, Two>; // 1 + 2

// We can subtract two numbers
type R2 = Subtract<Three, Two>; // 3 - 2

// We can create compound expressions
type R3 = Add<Add<One, Two>, Three>; // (1 + 2) + 3
type R4 = Add<Add<One, Two>, Subtract<Ten, One>>; // (1 + 2) + (10 - 1)

// We can get too big.
type R5 = Add<Ten, Ten>; // What is 10 + 10 when our number system stops at 15?

// We can get too small.
type R6 = Subtract<Two, Ten>; // What is 2 - 10 when our number system stops at 0?

// We can use previous results.
type R7 = Subtract<R1, R2>; // (1 + 2) - (3 - 2)

// Shall we try writing the multiplication "function"?
// type R8 = Multiply<Three, Four>;
