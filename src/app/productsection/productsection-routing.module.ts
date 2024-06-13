import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsectionComponent } from './productsection.component';
import { ProductlistComponent } from '../productlist/productlist.component';

const routes: Routes = [
  {
    path:'',
    component:ProductsectionComponent,
    children:[
      {
        path:':type',
        component:ProductlistComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsectionRoutingModule { }
