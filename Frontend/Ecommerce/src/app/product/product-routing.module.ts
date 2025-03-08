import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProductComponent } from './display-product/display-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  // {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'',component:DisplayProductComponent},
  {path:'add-Product',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
