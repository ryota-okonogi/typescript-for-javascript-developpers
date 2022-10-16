export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age }); // 受け取った引数を表示する
}

debugProfile('Ham', 43); // データを渡す

type Profile = Parameters<typeof debugProfile>; // debugProfileの引数の型を求めて、定数Profileに代入する。

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P // 「?」が入ったら、Conditional Types だと解釈する
  : never;
