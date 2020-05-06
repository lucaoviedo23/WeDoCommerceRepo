import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { MatSnackBarModule,MatDialogModule,MatInputModule,MatCardModule,MatButtonModule,MatIconModule,MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
  ],
  exports:[
    UploadFileComponent
  ]
})
export class UtilsModule { }
