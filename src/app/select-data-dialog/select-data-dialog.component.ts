// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-select-data-dialog',
//   templateUrl: './select-data-dialog.component.html',
//   styleUrl: './select-data-dialog.component.css'
// })
// export class SelectDataDialogComponent {

// }
import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-select-data-dialog',
  templateUrl: './select-data-dialog.component.html',
  styleUrls: ['./select-data-dialog.component.css']
})
export class SelectDataDialogComponent {
  flattenedTree: TreeNode[] = [];
  selectedNode: number | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SelectDataDialogComponent>,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // Flatten the tree structure
    this.flattenTree(data.updatedTreeData);
  }

  flattenTree(tree: TreeNode[]): void {
    tree.forEach(node => {
      this.flattenedTree.push(node);
      if (node.children) {
        this.flattenTree(node.children);
      }
    });
  }

  closeDialog(): void {
    // Find the selected node by ID and return it
    const selectedNode = this.flattenedTree.find(node => node.id === this.selectedNode);
    // console.log(selectedNode)
    this.dialogRef.close(selectedNode);
  }

  // Function to handle button click to close the dialog
  onCloseClick(): void {
    this.closeDialog();
  }
}
