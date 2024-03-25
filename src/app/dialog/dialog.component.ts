import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  TreeComponent } from '../tree/tree.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TreeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { }
  ) {}

  onSubmit(formData: any): void {

    console.log(formData)
    this.dialogRef.close(formData);
  }
}
