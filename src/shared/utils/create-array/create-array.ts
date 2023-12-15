export type TCreateArray = (length: number) => number[];

export const createArray: TCreateArray = (length) => Array.from({ length }, (_, index) => index);
