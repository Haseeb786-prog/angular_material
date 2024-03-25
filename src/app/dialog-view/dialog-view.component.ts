import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TreeComponent } from '../tree/tree.component'; // Import FoodNode interface
import { FoodNode } from '../data';



@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrls: ['./dialog-view.component.css']
})
export class DialogViewComponent {
  constructor(
    public dialogRef: MatDialogRef<TreeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { parentNode: FoodNode}
  ) {}

  onSubmit(formData: any): void {

    console.log(formData)
    this.dialogRef.close(formData);
  }
}
