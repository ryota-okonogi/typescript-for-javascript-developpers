export {};

type ObjectType = {
  name: string;
  age: number;
};

// interface型
interface ObjectInterface { // 型エイリアスが無いため、イコール(=)は不要。
  // interface単独でobject型の名前を付ける事ができる。
  // interfaceもアノテーションを行う事ができる
  name: string;
  age: number;
}

// let object: ObjectType = {
//   name: 'Ham-san',
//   age: 43
// };

// interfaceを使ってアノテーションを行う
let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43
};
