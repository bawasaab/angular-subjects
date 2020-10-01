import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { interval } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartCnt = 0;
  public source = interval(1000);

  constructor(
    public cartService : CartService
  ) { }

  ngOnInit(): void {

    this.source.subscribe( (val) => {
      this.addItem();
    } );

    this.cartService.cart$.subscribe( (cnt:number) => {
      
      this.cartCnt = cnt;
      console.log('cartCnt', this.cartCnt);
    } );
  }

  addItem() {
    this.cartService.addItemToCart();
  }
}
