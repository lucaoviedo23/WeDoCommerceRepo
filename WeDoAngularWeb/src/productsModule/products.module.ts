import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductsComponent } from './add-products/add-products.component';
import {MatInputModule,MatSnackBarModule, MatDialogModule, MatCardModule, MatToolbarModule,MatIconModule,MatButtonModule, MatDialog} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UploadFileComponent } from 'src/app/components/upload-file/upload-file.component';
import { EditProductsComponent } from './edit-products/edit-products.component';



@NgModule({
  declarations: [
   AddProductsComponent,
   EditProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule
  ],
  exports:[]  
})
export class ProductsModule { }
