import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';
import { BagPageComponent } from './bag-page/bag-page.component';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { AddToCartService } from '../add-to-cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BagRoutingModule,
    UiModule,
  ],
  declarations: [BagPageComponent]
})
export class BagModule {
  constructor(private add : AddToCartService ){
    console.log(add.product_id);
  }

 }
