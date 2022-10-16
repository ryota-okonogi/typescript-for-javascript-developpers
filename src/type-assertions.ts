export {};

let name: any = 'Ham';

let length = (name as string).length; // 変数length は number型
// let length = (<string>name).length; //この書き方は非推奨(JSXと酷似しているため)

// length = 'foo';
