import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'User', loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule)
  },
  // { path: '', redirectTo: 'Product', pathMatch: 'full' },
  { path: '',component:HomeComponent },
  { path: 'Product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'Cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
