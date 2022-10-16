export {};

let name = 'Atsushi';

name = 'Ham'

let nickname = 'Ham' as const;
nickname = 'Ham'
// nickname = 'Hamtaro' // 'Ham'以外の代入は許さない

let profile = {
  name: 'Atsushi',
  height: 178
} as const;

// 値の再代入
// profile.name = 'Ham';
// profile.height = 180;
