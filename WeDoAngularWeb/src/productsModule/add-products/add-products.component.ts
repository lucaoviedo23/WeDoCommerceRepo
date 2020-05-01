import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UploadFileComponent } from 'src/app/components/upload-file/upload-file.component';

@Component({
  selector: 'module-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  @ViewChild("inputMarca",{static: false}) inputMarca: ElementRef;
  @ViewChild("inputNombre",{static: false}) inputNombre: ElementRef;
  @ViewChild("inputDesc",{static: false}) inputDesc: ElementRef;
  @ViewChild("inputCod",{static: false}) inputCod: ElementRef;
  nompreProducto:any;
  constructor() { }

  ngOnInit() {
  }

  cleanInputs():void{
    this.inputMarca.nativeElement.value = null;
    this.inputNombre.nativeElement.value = null;
    this.inputDesc.nativeElement.value = null;
    this.inputCod.nativeElement.value = null;
  }
}
