export {};

/*
// 数値を受け取って、受け取った型と同じデータを返す関数
const echo = (arg: number): number => {
  return arg;
};

// 文字列を受け取って、受け取った型と同じデータを返す関数
const echo = (arg: string): string => {
  return arg;
};
*/

// generics型を用いた関数の定義
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100)); // console.log(echo<指定する型>(具体的なデータ));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

// <T> <= genericsの宣言
// T = 抽象的な型(一般的に[T]が使用される)
// T = 型引数

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics!').echo());
console.log(new Mirror<boolean>(true).echo());
