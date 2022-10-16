export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

// 「上記結果の戻り値」の型を調べたい
type ReturnTypeFromAdd = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// infer = 型として推論した結果を「R」に代入してくださいという意味で解釈する
