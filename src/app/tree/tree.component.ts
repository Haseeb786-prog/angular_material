
import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { MatDialog } from '@angular/material/dialog';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { DialogComponent } from '../dialog/dialog.component';
import { FoodNode, TREE_DATA } from '../data';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { SelectDataDialogComponent } from '../select-data-dialog/select-data-dialog.component';

interface ExampleFlatNode {
  expandable: boolean;
  id:number;
  name: string;
  level: number;
  expanded: boolean;
  children?: ExampleFlatNode[];
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  maxId: number;
  private _transformer = (node: FoodNode, level: number) => {
    return {
      level: level,
      expandable: !!node.children && node.children.length > 0,
      id:node.id,
      name: node.name,
      expanded: true
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  expandedNodes: { [nodeName: string]: boolean } = {};

  constructor(public dialog: MatDialog) {
    this.maxId = this.getMaxIdFromData(TREE_DATA);
    this.dataSource.data = TREE_DATA;
  
  }



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  deleteNode(node: FoodNode) {
    console.log(node.id);
    
    const index = TREE_DATA.findIndex(item => item.id === node.id);
  
    if (index !== -1) {
      TREE_DATA.splice(index, 1);
     ; // Remove expansion state
      this.dataSource.data = TREE_DATA;
    } else {
      this.deleteChildNode(node.id);
    }
  }
  
  deleteChildNode(nodeId: number): boolean {
    console.log(nodeId)
    let isDeleted = false;
  
    function deleteChildNodeRecursive(nodes: FoodNode[]): boolean {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.children) {
          const childIndex = node.children.findIndex(child => child.id === nodeId);
          if (childIndex > -1) {
            node.children.splice(childIndex, 1);
            isDeleted = true;
            break;
          } else {
            isDeleted = deleteChildNodeRecursive(node.children);
            if (isDeleted) {
              break;
            }
          }
        }
      }
      return isDeleted;
    }
  
    isDeleted = deleteChildNodeRecursive(TREE_DATA);
  
    if (isDeleted && this.dataSource) {
      this.dataSource.data = TREE_DATA.slice();
    }
  
    return isDeleted;
  }
  

 
  saveEdit(node: FoodNode) {
    node.editing = false;
  }

  cancelEdit(node: FoodNode) {
    node.editing = false;
  }

  openAddNodeDialog(parentNode: any): void {
    const dialogRef = this.dialog.open(DialogViewComponent, {
      width: '250px',
      data: { parentNode }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && parentNode) {
        const childNode: FoodNode = result;
        this.addChildNode(parentNode, childNode);
      }
    });
  }

 
  addChildNode(parentNodeId: number, childNode: FoodNode): boolean {
    let isAdded = false;
  
    // Function to generate a unique id
    const generateUniqueId = () => {
      return ++this.maxId;
    };
  
    function addChildNodeRecursive(nodes: FoodNode[]): boolean {
      for (const node of nodes) {
        if (node.id === parentNodeId) {
          if (!node.children) {
            node.children = [];
          }
          // Assign a unique id to the child node
          childNode.id = generateUniqueId();
          node.children.push(childNode);
          isAdded = true;
          // Expand parent node
          break;
        } else if (node.children && addChildNodeRecursive(node.children)) {
          // Early exit if child is added deeper in the tree
          break;
        }
      }
      return isAdded;
    }
  
    isAdded = addChildNodeRecursive(TREE_DATA);
  
    if (isAdded && this.dataSource) {
      this.dataSource.data = TREE_DATA.slice();
    }
  
    return isAdded;
  }
  

  getMaxIdFromData(data: FoodNode[]): number {
    let maxId = 0;
    data.forEach(node => {
      if (node.id > maxId) {
        maxId = node.id;
      }
      if (node.children) {
        const childMaxId = this.getMaxIdFromData(node.children);
        if (childMaxId > maxId) {
          maxId = childMaxId;
        }
      }
    });
    return maxId;
  }

  

  addParentNode(name: string) {
    // Increment maxId and assign it to the new parent node
    const newNode: FoodNode = {
      id: ++this.maxId,
      name,
      children: []
    };
    TREE_DATA.push(newNode);
    console.log(TREE_DATA)
    this.dataSource.data = TREE_DATA;
  }

  openAddParentNodeDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addParentNode(result.name);
      }
    });
  }

  findNodeById(nodeId: number): FoodNode | null {
    function findNodeRecursive(nodes: FoodNode[]): FoodNode | null {
      for (const node of nodes) {
        if (node.id === nodeId) {
          return node;
        }
        if (node.children) {
          const foundNode = findNodeRecursive(node.children);
          if (foundNode) {
            return foundNode;
          }
        }
      }
      return null;
    }
  
    return findNodeRecursive(TREE_DATA);
  }
  


  openEditDialog(nodeId:number):void{
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(nodeId,result)
        this.editNode(nodeId,result.name);
      }
    });

  }
  editNode(nodeId: number, newName: string): boolean {
    let isUpdated = false;
  
    const findAndUpdateNode = (nodes: FoodNode[]): boolean => {
      for (const node of nodes) {
        if (node.id === nodeId) {
          node.name = newName; // Update the node's name
          isUpdated = true; // Mark as updated
          return true; // Return true to indicate update
        }
        if (node.children) {
          if (findAndUpdateNode(node.children)) {
            return true; // Return true if child node was updated
          }
        }
      }
      return false; // Return false if node was not found or updated
    };
  
    if (findAndUpdateNode(TREE_DATA)) {
      // If node was updated, update dataSource
      this.dataSource.data = TREE_DATA.slice();
      return true; // Return true if update was successful
    }
  
    return false; // Return false if node was not found or updated
  }
  
  
  moveNodeDialog(id: number): void {
    // Function to recursively find and remove node from tree data
    const findAndRemoveNode = (nodes: any[], targetId: number): any => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === targetId) {
          // Found the target node, remove it and return it
          const removedNode = nodes.splice(i, 1)[0];
          return removedNode;
        }
        if (nodes[i].children) {
          // Recursively search in children
          const removedNode = findAndRemoveNode(nodes[i].children, targetId);
          if (removedNode) return removedNode;
        }
      }
      return null; 
    };

   
    const updatedTreeData = TREE_DATA;

    const removedNode = findAndRemoveNode(updatedTreeData, id); 
    const dialogRef = this.dialog.open(SelectDataDialogComponent, {
      width: '500px',
      data: { updatedTreeData: updatedTreeData, removedNode: removedNode } // Pass removed node and updated tree data to dialog component
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result.id, TREE_DATA);
        this.pushRemovedNodeIntoTree(updatedTreeData, result.id, removedNode);
        // Assuming this.dataSource.data represents your tree data in the UI
        this.dataSource.data = updatedTreeData; // Update the tree data in the UI
      }
    });
  }

  pushRemovedNodeIntoTree(tree: any[], nodeId: number, removedNode: any): void {
    for (const node of tree) {
      if (node.id === nodeId) {
        if (!node.children) {
          node.children = [];
        }
        node.children.push(removedNode);
        return;
      } else if (node.children) {
        this.pushRemovedNodeIntoTree(node.children, nodeId, removedNode);
      }
    }
  }
}
