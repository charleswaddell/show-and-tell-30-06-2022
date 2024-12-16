export type NumToTuple<
  Num extends number,
  Res extends symbol[] = []
> = Res['length'] extends Num ? Res : NumToTuple<Num, [symbol, ...Res]>;
