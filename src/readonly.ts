export {};

class VisaCard {
  constructor(public readonly owner: string) {} // publicは省略可能だが、非推奨
}

let myVisaCard = new VisaCard('ハムさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン'
