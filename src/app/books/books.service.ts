import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return[
      {
        name: 'clean code',
        author:'robert c martin',
        image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
        amount: 700
    },
    {
        name:'the pragmatic programmer',
        author:'david thomas',
        image:'https://m.media-amazon.com/images/I/71f743sOPoL.jpg',
        amount:800
    },
    {
        name:'Windows 11 For Dummies',
        author:'Andy Rathbone',
        image:'https://d1b14unh5d6w7g.cloudfront.net/1119846471.01.S001.JUMBOXXX.jpg?Expires=1692740774&Signature=VMDlhonwnND9D9fq5wpjC4xbnysFTxHuYm7QgAzCQCex16esemieQ5DB~EfLLK1qpFLA2pAxW2UT~n9nLHCizUoyFxZDpQWno~ImRchBU4rYWx5ZzWBqO~iwrnu-QHVXnb8y4TBGzBmHvr~4wjuEpGGGZ5Y2irj0BTdjhROvvpg_&Key-Pair-Id=APKAIUO27P366FGALUMQ',
        amount:900
    }
  ];
  }
}