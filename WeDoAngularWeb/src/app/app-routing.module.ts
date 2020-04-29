import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductsComponent } from './components/products/addproducts/addproducts.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: AddproductsComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
