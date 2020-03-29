import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data/data.service';
import { Product } from '../../data/meta';
import { AddToCartService } from '../../add-to-cart.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss'],
})
   
export class ViewPageComponent implements OnInit {
  color: any;
  prodcut_id  = '' ;
  size: any;

  cartProducts = {
    'id' : this.prodcut_id
  }
  product: Product;

  
  recent: Product[];

  constructor(private data: DataService,
              private route: ActivatedRoute,
              private addcart : AddToCartService,
              private router : Router ) {
                this.prodcut_id = this.route.snapshot.paramMap.get("id");
                // console.warn(this.prodcut_id);
  }
    // constructor(private addattendanceSer:AttendanceService, private router:Router) { }

  addtocart(){
    console.log(this.prodcut_id);
   this.addcart.add(this.prodcut_id);

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.data.products.find(p => p.id === parseInt(params.id, 10));
      this.recent = this.data.products.slice(0, 4);
    });
  }
}
