import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,MatSnackBarModule, MatDialogModule, MatCardModule, MatToolbarModule,MatIconModule,MatButtonModule, MatDialog} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from '../productsModule/products.module';
import { AddproductsComponent } from './components/products/addproducts/addproducts.component';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EditproductsComponent } from './components/products/editproducts/editproducts.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AddproductsComponent,
    UploadFileComponent,
    EditproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ProductsModule,
    BrowserAnimationsModule,
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
  exports:[UploadFileComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
