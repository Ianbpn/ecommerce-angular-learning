import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Book } from 'src/app/Types/Book';
import { CartService } from 'src/app/cart/cart.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book:Book ={} as Book;

  isInCart:boolean=false;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.isInCart=true;
    this.cartService.add(this.book);
  }
  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book);
  }
}
