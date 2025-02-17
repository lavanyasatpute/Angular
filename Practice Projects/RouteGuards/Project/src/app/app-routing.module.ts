import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'admin', component:AdminComponent, canActivate:[AuthGuard], canActivateChild:[AuthGuard], resolve:[AuthGuard], canDeactivate:[AuthGuard], canLoad:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
