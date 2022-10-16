export {};

class Me {
  // newによってインスタンスを作らないとアクセスできない -> (静的メンバにする) staticを付ける
  // メンバ
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  // メソッド
  static work() {
    // "Hey, guys! This is Atsushi! Are you interested in TypeScript? Let's dive into TypeScript!"
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

// 静的メンバへのアクセス
console.log(Me.isProgrammer);
console.log(Me.work());
