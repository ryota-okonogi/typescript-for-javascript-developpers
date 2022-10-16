export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
):number => weight / (height * height); // return文は省略する事ができる(arrow関数でできる事)

console.log(bmi(1.78, 86));
