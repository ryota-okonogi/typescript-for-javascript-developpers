export {};

// プロパティの型定義
class Person {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  // コンストラクタメソッド
  constructor(name: string, age: number, nationality: string) {
    //初期化処理
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

// メソッドを追加
  profile(): string {
    return `name: ${this.name}, age: ${this.age}` // ${} => 「テンプレートストリング」という
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 初期化処理は親クラスと同様にする
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`; // ${} => 「テンプレートストリング」という
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Personz;
