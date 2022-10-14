export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined; // void型には undefinedが含まれるので代入する事ができる
let bar: never = error('only me!');
// never型は「値」という概念が無いので、undefinedを設定するとエラーが発生する
// nullを代入してもエラーは発生する
// ただし、唯一代入できるものがある => それは「error関数」
//「error関数」=> never型を返す関数
// never型を返す関数 => never型の変数に代入する事ができる(「こういう言語仕様なんだ…」という理解で大丈夫 )



// 必ず「受け取った文字列」をエラーメッセージとして、エラーを発生させる <= という関数
// return文は無い(呼び出し元には戻ってこない)

// こういった時の関数に対する型指定(アノテーション)をどう書くべきか？
// 「関数の中で例外を起こす」場合、どのようにアノテーションを書くべきか？

// never という「型」を指定する
//数ある関数の中で neverだけが呼び出し元に戻ってこない => 例外がて起きてしまうから

// error関数は Errorを実行(例外を発生)する
// エラーハンドリングをしないと、発生したエラーを拾うことはできない。
// 「エラーハンドリング込みの実装」をする
