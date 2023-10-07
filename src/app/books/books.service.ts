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
        image:'https://media.wiley.com/product_data/coverImage300/71/11198464/1119846471.jpg',
        amount:900
    }
  ];
  }
}