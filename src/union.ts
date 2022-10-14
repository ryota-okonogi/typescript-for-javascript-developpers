export {};

// やりたいこと = (umber型のデータの格納, 文字列型のデータの格納)の両方を可能にすること
let value: number | string = 1; // number型のときもあれば、string型のときもあるよという事(orと同じ意味合)
value = 'foo';
value = 111
