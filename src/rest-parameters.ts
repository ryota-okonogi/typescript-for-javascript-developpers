export {};

const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));

// sum = 引数に数値を適当に与えた時に全ての引数の総和を求める関数
