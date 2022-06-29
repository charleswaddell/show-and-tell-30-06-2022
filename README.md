# Show and Tell - June 30th, 2022

## Programming with the TypeScript type system

Recently, after reading [two](https://www.zhenghao.io/posts/type-programming) [different](https://www.learningtypescript.com/articles/extreme-explorations-of-typescripts-type-system) articles online, I've had the idea seeing what I could build if I used just the TypeScript type system as my programming language. No Javascript allowed! Since the type system is [Turing Complete](https://github.com/microsoft/TypeScript/issues/14833) it means we should be able to program anything we'd like in it.

About a year ago I read a lovely little book called [The Little Schemer](https://mitpress.mit.edu/books/little-schemer-fourth-edition). One of the goals of the book is to teach the reader to think recursively and one of the earlier exercises in the book is about building recursive functions that do addition and subtraction. You are given two functions `add1(x)` and `sub1(x)` that, respectively, add and subtract 1 from a single arguement. Using these functions you can then build `add(x, y)` and `subtract(x, y)`.

If you squint you can see how the TypeScript type system looks an awful lot like the functional programming parts of JavaScript which in turn look a lot like Scheme. After figuring out how to create `AddOne` and `SubtractOne` in the type system it was possible to implement `Add` and `Subtract` from The Little Schemer.

| Concept               | JavaScript                          | TypeScript type system         |
| --------------------- | ----------------------------------- | ------------------------------ |
| Named Values          | `const result = [primative]`        | `type Result = [primative]`    |
| Functions             | `const func = (a, b) => a`          | `type Func<A, B> = A`          |
| Equality              | `a === b`                           | `A extends B`                  |
| Conditional Branching | `a === b ? a : b`                   | `A extends B ? A : B`          |
| Recursion             | `const func = (a, b) => func(a, b)` | `type Func<A, B> = Func<B, A>` |
