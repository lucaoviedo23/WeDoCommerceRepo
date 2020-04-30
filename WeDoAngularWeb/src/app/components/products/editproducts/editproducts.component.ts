import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {
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
