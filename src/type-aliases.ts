export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojuretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43
};

type Profile = {
name: 'Ham',
age: 43
};

/*
// 明示的なアノテーションを行う
const example2: {
  name: string;
  age: number;
} = {
  name: 'Ham',
  age: 43
};

// アノテーション内のデータ構造が同じものは、その名前で指定する事ができる
const example3: Profile = {
  name: 'Ham',
  age: 43
};
*/


// 「リバースエンジニアリング」という方法で型を作る

// example1のデータの型を、Profile2として設定する
type Profile2 = typeof example1;
