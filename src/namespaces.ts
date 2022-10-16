export {};

// Personクラスは、Japaneseという名前空間に属するもの
namespace Japanese {
  export namespace Tokyo {
  // 外からも見えるようにするための修飾子(export) // Personに外からアクセスできるようにする
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }

}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
      ) {}
  }
}

const me = new Japanese.Tokyo.Person('ハムさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('ハムやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
