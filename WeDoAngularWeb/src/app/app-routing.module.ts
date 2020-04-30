import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductsComponent } from './components/products/addproducts/addproducts.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: AddproductsComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
