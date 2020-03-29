import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsModule } from '../products/products.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },{
    path: 'products',
    component: ProductsModule ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
