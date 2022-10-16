export {};

// プロパティの型定義
class Person {
  name: string;
  age: number;

  // コンストラクタメソッド
  constructor(name: string, age: number) {
    //初期化処理
    this.name = name;
    this.age = age;
  }

// メソッドを追加
  profile(): string {
    return `name: ${this.name}, age: ${this.age}` // ${} => 「テンプレートストリング」という
  }
}

let taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Personz;
