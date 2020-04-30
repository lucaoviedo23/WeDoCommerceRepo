import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent{
  @ViewChild('fileInput',{static: false})

  fileInput;

  file: File | null = null;
  constructor(private _snackBar: MatSnackBar) { }
 
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
      if(this.validateFileInput(files[0])){
        this.file = files[0];
      }
      
  }

  validateFileInput(File:any):boolean{
    let ok = true;
    if(File.name.length >= 30){
      ok = false;
      this._snackBar.open("La imagen necesita un nombre mas corto!","Advertencia!",{
        duration: 5000,
        panelClass: ['snack-warning']
      });
    }
    return ok;
  }
  


}
