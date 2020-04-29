import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatInputModule, MatCardModule, MatToolbarModule,MatIconModule,MatButtonModule} from '@angular/material';
import { AddproductsComponent } from './components/products/addproducts/addproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
