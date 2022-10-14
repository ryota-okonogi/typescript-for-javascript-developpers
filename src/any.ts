import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url)
.then(function (response) {
  interface Article { //こうすることで具体的な型を、オリジナルで「独自型」を作る事ができる
    id: number;
    title: string
    description: string;
  }
  let data: Article[]; // objectを指定することでアノテーションをする事ができる(まだ完璧な状態ではない[objectの中身が無いでもエラーにならないから])
  data = response.data; // データを、変数dataに格納してそれを console.log で出力する
  console.log(data);
});
