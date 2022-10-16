export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

// 代入できるかどうかを決定する際に両者の型の互換性は、コンパイラによって常に評価されている。
// 代入ができる場合 => 「any型はstring型と互換性がある」という事になる

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

// 「文字列リテラル型は文字列型の一部」だからOK
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

// 数値型もOK (上記内容と同じ)
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'HamSan');

