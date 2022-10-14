export {};

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 };

// 「 objectのアノテーション[: object] 」は制約がアマい
// profile1の変数を用いて処理を行っている最中に、想定外のデータに差し替わってしまった場合、
// それに気づくことができない(なぜなら、ERRORが発生しないから)

let profile2: {
  name: string;
}= { name: 'Ham' };
profile2 = { name: 'Nimo' };

// 波カッコ( {} )でも、objectと書いたときと同じ様に、オブジェクト型のデータをアノテーションする事ができる
// ただし、同じようなリスクが残っている。

// (object と書いたときと異なる点)
// 「プロパティについても型指定ができる」という点

// プロパティが不一致 = ERROR
// プロパティが一致 = OK
