export {};

// (要件)
// *
//  * 所有者
//  * 初期化時に設定できる。
//  * 途中で変更できない。
//  * 参照できる。
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる。
//  * 途中で変更できる。
//  * 参照できない。

class MyNumberCard {

  // メンバ変数 // ownerは、getterのownerと競合しないようにリネームする。
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // メンバ変数のownerを参照するためのメソッド(getter)
  get owner() {
    return this._owner;
  }

  // setter = setというキーワードを伴うメソッドのこと
  // 値を設定する時のみ実行されるメソッド
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('ハムさん', 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
console.log(card.owner);
console.log(card.secretNumber);
// card.owner = 'Ham';
// card._secretNumber;
