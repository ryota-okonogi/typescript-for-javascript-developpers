export {};

// constructorによるメンバ変数の初期化処理をするためだけのclass
class Person {
  // アクセス修飾子をコンストラクタメソッドの引数に書くと期待する出力を得ることができるようになる
  constructor(public name: string, protected age: number) {}
}


  /*
  //メンバの宣言
  public name: string;
  protected age: number;
  */

  /*
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  */

const me = new Person('ハムさん', 43);
console.log(me);
