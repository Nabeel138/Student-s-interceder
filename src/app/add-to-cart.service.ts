import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  product_id = {
  };
  constructor() { 
  }
  add(id){
    this.product_id = id;
  }
}
