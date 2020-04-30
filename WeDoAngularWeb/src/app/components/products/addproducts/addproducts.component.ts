import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
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
