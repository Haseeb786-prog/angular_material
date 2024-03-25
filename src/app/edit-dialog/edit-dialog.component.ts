import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  TreeComponent } from '../tree/tree.component'; // Import FoodNode interface
import { TREE_DATA } from '../data';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css'
})


export class EditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TreeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {  }
  ) {}

  onSubmit(formData: any): void {

    console.log(formData)
    this.dialogRef.close(formData);
  }
}
