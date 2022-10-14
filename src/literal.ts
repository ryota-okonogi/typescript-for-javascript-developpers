export {};

// 変数でやりたいこと => 曜日を管理すること

/*
let dayOfTheWeek: '日' = '日'; // 初期化
dayOfTheWeek = '日'; // 日曜日にアップデート
dayOfTheWeek = '31'; // この状態だと、'月' 〜 '日' 以外の曜日に関係ないものも定義できてしまう
*/

// 文字列
// literal型とunion型を組み合わせることで、'月' 〜 '日' までの７つの文字列だけを許容する事ができるのでは？
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '31';

// 数値
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13;

// 真偽値
let TRUE: true = true;
// TRUE = false;
