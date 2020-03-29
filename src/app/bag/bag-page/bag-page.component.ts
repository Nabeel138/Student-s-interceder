import { Component, OnInit } from '@angular/core';
import {AddToCartService} from '../../add-to-cart.service';
import { DataService} from '../../data/data.service';
@Component({
  selector: 'app-bag-page',
  templateUrl: './bag-page.component.html',
  styleUrls: ['./bag-page.component.scss']
})
export class BagPageComponent implements OnInit {
  pro_id;
  pro_data;
  constructor(public add : AddToCartService,
                      public data :DataService) 
  {
    this.pro_id = add.product_id;
    console.log(add.product_id)
    console.log(data.products[this.pro_id - 1])
    this.pro_data = data.products[this.pro_id - 1];
  }

  ngOnInit() {
  }

}
