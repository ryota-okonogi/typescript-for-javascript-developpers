export {};

// 翌年の年俸を求める関数
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));

// number = 1.1 => デフォルト引数
