import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart$ = new Subject();
  public cartItems = 0;

  constructor() {
    this.cart$.asObservable();
  }
 
  addItemToCart() {

    this.cartItems++;
    this.cart$.next( this.cartItems );
  }
}
