import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appPath } from './app-path.const';

const routes: Routes = [
  {
    path: appPath.home,
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)

  },
  {
    path:appPath.products,
    loadChildren:()=>import('./productsection/productsection.module').then(m=>m.ProductsectionModule)

  },
  {
    path:appPath.login,
    loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path:appPath.cart,
    loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)
  },
{
  path:appPath.checkout,
  loadChildren:()=>import('./checkout/checkout.module').then(m=>m.CheckoutModule)
},
{
  path:appPath.success,
  loadChildren:()=>import('./success/success.module').then(m=>m.SuccessModule)
},
// 設定通配路徑，不是上述路徑的其他路徑
{
  path:'**',
  redirectTo:appPath.home,//重新導向的路徑
  pathMatch:'full'//只有當整個 URL完全匹配時才會重新導向。而不是當 URL 包含 '' 路徑時就執行。
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
