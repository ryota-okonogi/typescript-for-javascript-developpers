export {};

// 関数を定義する
const kansu = (): number => 43;

// kansuの実行コード(実行結果を格納する変数を定義する)
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

/*
// 型を取得して、出力してみる
console.log(typeof numberUnknown); // typeof = 型を取得できるキーワード
// let sumUnknown = numberUnknown + 10;

//「数値じゃないかも知れない」と指摘されている中、計算は行いたい場合にどうするか？
*/
