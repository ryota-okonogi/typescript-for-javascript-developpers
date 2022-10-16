export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  //height と weight は、必須の引数として定義している
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.78, 86);

// bmi(身長, 体重, console.logで出力するかどうか？[オプショナルな引数])
// bmi(1.78, 86, true); => 出力される
// bmi(1.78, 86, false); => 出力されない
// bmi(1.78, 86); => 出力されない

// オプショナルな引数にする方法
// 引数の後ろにクエスチョン(?)を書くこと
// こうすることで、printableの引数は「有っても無くてもいいもの」になる。
