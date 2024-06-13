import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsectionRoutingModule } from './productsection-routing.module';
import { ProductsectionComponent } from './productsection.component';


@NgModule({
  declarations: [
    ProductsectionComponent
  ],
  imports: [
    CommonModule,
    ProductsectionRoutingModule
  ]
})
export class ProductsectionModule { }
