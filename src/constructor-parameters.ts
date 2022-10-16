export {};

class Person {
  name: string;
  age: number;

  // 受け取った(name, age)で初期化する
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// インスタンス化
let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;

// 「PersonTypeクラスの型をconstructor-parameters型引数に食わせる」と、どんなものが得られるか？
type Profile = ConstructorParameters<PersonType>;

// データを入れる
const profile: Profile = ['Ham', 43];
// インスタンスを作る
const ham = new Person(...profile);
console.log(ham)

type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
