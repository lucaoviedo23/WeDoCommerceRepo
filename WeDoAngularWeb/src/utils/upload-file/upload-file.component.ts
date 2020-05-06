import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @ViewChild('fileInput',{static: false})
  fileInput;
  file: File | null = null;
  files: { [key: string]: File } = null;
  
  constructor(private _snackBar: MatSnackBar) { }
  ngOnInit() {
  }
 
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    this.files=  this.fileInput.nativeElement.files;
    if(this.validateFileInput(this.files[0])){
      this.file = this.files[0];
    }
        
      
  }

  validateFileInput(file:File):boolean{
    let isOk=true;
    if(file.name.length >= 30){
      isOk=false;
      this._snackBar.open("La imagen necesita un nombre mas corto!","Atención!",{
        duration: 4000,
        panelClass: ['snackBar-atention']
      });
    }
    return isOk;
  }
  


}
