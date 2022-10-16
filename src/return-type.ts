export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

// 「上記結果の戻り値」の型を調べたい
type ReturnTypeFromAdd = ReturnType<typeof add>;
