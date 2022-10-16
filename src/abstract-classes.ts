export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar'; // 「実体を書かないといけない」ということで文字列を返す必要がある(return)
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}
