export {};

// シグネチャー(引数とreturnの型だけ定義する)
function double(value: number): number;
function double(value: string): string;


// ２倍にして返す関数
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
