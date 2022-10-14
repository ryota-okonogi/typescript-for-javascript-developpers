export {};

// 数値を列挙できるenum型
enum Months {
  January = 1, // 実際の月より「1」少ない問題を解消する(オーバーライドする)
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

/*
// JSで同様の処理を書くと
const MonthsJs = {
  January: 0,
  February: 1
};

console.log(MonthsJs.January);
console.log(MonthsJs.February);
*/


// 文字列を列挙できるenum型
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
}
let green = COLORS.GREEN;
console.log({ green }); // 出力の色が緑色になる

// 要素を追加したい時の便利なアクセスの仕方(カンマ, 初期化などをし忘れるという事が無い)
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}

COLORS.YELLOW;

/*
let yellow = COLORS.YELLOW;
console.log({ yellow }); // 出力の色が黄色になる訳ではない
*/
