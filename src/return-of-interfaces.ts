export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void; // 処理の実態が分からないようなメソッドの宣言 => 「シグネチャー」という
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
