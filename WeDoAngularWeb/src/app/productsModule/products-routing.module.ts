import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductsComponent } from 'src/app/components/products/addproducts/addproducts.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
