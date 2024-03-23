

// import {Component, Inject} from '@angular/core';
// import {FlatTreeControl} from '@angular/cdk/tree';
// import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNodeDef} from '@angular/material/tree';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
// import { FormsModule } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// // import { AddTreeComponent } from '../add-tree/add-tree.component';

// import {
//   MatDialog,


// } from '@angular/material/dialog';

// import { DIALOG_DATA } from '@angular/cdk/dialog';
// import { DialogViewComponent } from '../dialog-view/dialog-view.component';
// import { DialogComponent } from '../dialog/dialog.component';

//  export interface FoodNode {
//   name: string;
//   children?: FoodNode[];
//   editing?: boolean;
// }

//  export const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Fruit',
//     children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
//   },
//   {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
//       },
//       {
//         name: 'Orange',
//         children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
//       },
//     ],
//   },
// ];

// /** Flat node with expandable and level information */
// interface ExampleFlatNode {
//   expandable: boolean;
//   name: string;
//   level: number;
// }

// /**
//  * @title Tree with flat nodes
//  */
// @Component({
//   selector: 'app-tree',
//   templateUrl: './tree.component.html',
//   styleUrl: './tree.component.css'
// })

// export class TreeComponent {
//   private _transformer = (node: FoodNode, level: number) => ({
//     expandable: !!node.children && node.children.length > 0,
//     name: node.name,
//     level: level
//   });

//   treeControl = new FlatTreeControl<ExampleFlatNode>(
//     node => node.level,
//     node => node.expandable
//   );

//   treeFlattener = new MatTreeFlattener(
//     this._transformer,
//     node => node.level,
//     node => node.expandable,
//     node => node.children
//   );

//   dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

//   constructor(
//     public dialog: MatDialog
//     ) {
//     this.dataSource.data = TREE_DATA;
    
//   }

//   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

 





//   // deleteNode(node: FoodNode) {
//   //   console.log(node)
//   //   const index = TREE_DATA.indexOf(node);
//   //   if (index > -1) {
//   //     TREE_DATA.splice(index, 1);
//   //     this.dataSource.data = TREE_DATA;
//   //   }
//   // }

//   deleteNode(node: FoodNode) {
//     console.log(node);
//     // Assuming the node has a 'name' property
//     const nodeName = node.name;

//     // Find the index of the node with the matching name
//     const index = TREE_DATA.findIndex(item => item.name === nodeName);

//     if (index !== -1) {
//         // If found, remove the node from the array
//         TREE_DATA.splice(index, 1);
//         this.dataSource.data = TREE_DATA;
//     } else {
//         this.deleteChildNode(nodeName);
//     }
// }



//  deleteChildNode(nodeName: string): boolean {
//   let isDeleted = false;

//   // Recursive helper function to traverse the tree
//   function deleteChildNodeRecursive(nodes: FoodNode[]): boolean {
//     for (let i = 0; i < nodes.length; i++) {
       
//       const node = nodes[i];

//       if (node.children) {
//         const childIndex = node.children.findIndex(child => child.name === nodeName);
//         if (childIndex > -1) {
//           node.children.splice(childIndex, 1);
//           isDeleted = true;
//           break; // Stop searching after finding the target node
//         } else {
//           // Recursively search child nodes
//           isDeleted = deleteChildNodeRecursive(node.children);
//           if (isDeleted) {
//             break; // Stop searching after deletion in child nodes
//           }
//         }
//       }
//     }
//     return isDeleted;
//   }

//   // Call the recursive helper function on the root nodes
//   isDeleted = deleteChildNodeRecursive(TREE_DATA);

//   // Update the data source if applicable (assuming dataSource exists)
//   if (isDeleted && this.dataSource) {
//     this.dataSource.data = TREE_DATA.slice(); // Create a copy to avoid mutation
//   }

//   return isDeleted;
// }





// // editNode(node: FoodNode, newName: string) {
// //   node.editing = true;
// //   console.log(newName);

// //   // Find the node and update its name directly in TREE_DATA
// //   const findNode = (nodes: FoodNode[]) => {
// //     for (let i = 0; i < nodes.length; i++) {
// //       const n = nodes[i];
// //       if (n === node) {
// //         n.name = newName;
// //         return true;
// //       }
// //       if (n.children && findNode(n.children)) {
// //         return true;
// //       }
// //     }
// //     return false;
// //   };

// //   findNode(TREE_DATA);

// //   
// // }
// editNode(node: FoodNode, newName: string) {
//   node.editing = true;
//   console.log(newName);

//   // Find the node and return the updated node
//   const findNode = (nodes: FoodNode[]): FoodNode | null => {
//     for (const n of nodes) {
//       if (n === node) {
//         n.name = newName;
//         return n; // Return the updated node
//       }
//       if (n.children) {
//         const updatedChild = findNode(n.children);
//         if (updatedChild) {
//           return n; // If child is updated, return the parent
//         }
//       }
//     }
//     return null;
//   };

//   const updatedNode = findNode(TREE_DATA);

 
//   if (updatedNode) {
   
//   }
// }






// saveEdit(node: FoodNode) {
//   node.editing = false; 
  
// }

// cancelEdit(node:  FoodNode) {
//   node.editing = false;
// }


// // openAddNodeDialog(node: FoodNode): void {
// //   const dialogConfig = new MatDialogConfig();
// //   dialogConfig.data = { name: node.name }; // Pass existing name to dialog

// //   const dialogRef = this.dialog.open(AddTreeComponent, dialogConfig);

// //   dialogRef.afterClosed().subscribe(result => {
// //     if (result) { // If user saved changes
// //       this.editNode(node, result); // Update node name in the tree
// //     }
// //   });

// // }
// // addChildNode(node:any)
// // {

// // }
// // maxTreeDepth?: number= this.calculateMaxDepth(TREE_DATA);
// // calculateMaxDepth(nodes: FoodNode[], currentDepth: number = 0): number {
// //   let maxDepth = currentDepth;
// //   for (const node of nodes) {
// //     if (node.children) {
// //       const childDepth = this.calculateMaxDepth(node.children, currentDepth + 1);
// //       if (childDepth > maxDepth) {
// //         maxDepth = childDepth;
// //       }
// //     }
// //   }
// //   return maxDepth;
// // }



// openAddNodeDialog(parentNode: any): void {
  
//   const dialogRef = this.dialog.open(DialogViewComponent, {
//     width: '250px',
//     data: { parentNode }
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(result)
//     if (result && parentNode) {
 
//       const childNode : FoodNode = result
//       this.addChildNode(parentNode, childNode);
//     }
//   });
// }

// addChildNode(parentNodeName: string, childNode: FoodNode): boolean {
//   let isAdded = false;

//   function addChildNodeRecursive(nodes: FoodNode[]): boolean {
//     for (let i = 0; i < nodes.length; i++) {
//       const node = nodes[i];
//       if (node.name === parentNodeName) {
//         if (!node.children) {
//           node.children = [];
//         }
//        const   data: any= node.children.push(childNode);
//        console.log(data)
//         isAdded = true;
//         break;
//       } else if (node.children) {
//         isAdded = addChildNodeRecursive(node.children);
//         if (isAdded) {
//           break;
//         }
//       }
//     }
//     return isAdded;
//   }

//   isAdded = addChildNodeRecursive(TREE_DATA);

//   if (isAdded && this.dataSource) {

//     this.dataSource.data = TREE_DATA.slice();
    
//   }

//   return isAdded;
// }

// addParentNode(name: string) {
//   TREE_DATA.push({ name, children: [] });
//   this.dataSource.data = TREE_DATA;
// }


// openAddParentNodeDialog(): void {
  
//   const dialogRef = this.dialog.open(DialogComponent, {
//     width: '250px',
  
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(result)
//     if (result ) {
 
//       this.addParentNode(result.name)
//     }
//   });
// }
// }

// import { Component } from '@angular/core';
// import { FlatTreeControl } from '@angular/cdk/tree';
// import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
// import { MatDialog } from '@angular/material/dialog';
// import { DialogViewComponent } from '../dialog-view/dialog-view.component';
// import { DialogComponent } from '../dialog/dialog.component';

// export interface FoodNode {
//   name: string;
//   children?: FoodNode[];
//   editing?: boolean;
//     expanded?: boolean ;
// }

//  export const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Fruit',
//     children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
//   },
//   {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
//       },
//       {
//         name: 'Orange',
//         children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
//       },
//     ],
//   },
// ];

// interface ExampleFlatNode {
//   expandable: boolean;
//   name: string;
//   level: number;
//   expanded: boolean;
//   children?: ExampleFlatNode[]; 
// }

// @Component({
//   selector: 'app-tree',
//   templateUrl: './tree.component.html',
//   styleUrls: ['./tree.component.css']
// })
// export class TreeComponent {
//   private _transformer = (node: FoodNode, level: number) => {
//     return {
//       level: level,
//       expandable: !!node.children && node.children.length > 0,
//       name: node.name,
//       expanded: node.expanded || false
//     };
//   };
  
  
  

//   treeControl = new FlatTreeControl<ExampleFlatNode>(
//     node => node.level,
//     node => node.expandable
//   );

//   treeFlattener = new MatTreeFlattener(
//     this._transformer,
//     node => node.level,
//     node => node.expandable,
//     node => node.children
//   );

//   dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

//   expandedNodes: { [nodeName: string]: boolean } = {};
//   // expandedNodes: { [nodeName: string]: boolean } = {};

//   constructor(public dialog: MatDialog) {
//     this.dataSource.data = TREE_DATA;
//     // this.initializeExpansionState(TREE_DATA);
//   }

//   // initializeExpansionState(nodes: FoodNode[]) {
//   //   nodes.forEach(node => {
//   //     if (node.children) {
//   //       this.expandedNodes[node.name] = false; 
//   //       this.initializeExpansionState(node.children);
//   //     }
//   //   });
//   // }

//   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

//   deleteNode(node: FoodNode) {
//     const nodeName = node.name;
//     const index = TREE_DATA.findIndex(item => item.name === nodeName);

//     if (index !== -1) {
//       TREE_DATA.splice(index, 1);
//       this.dataSource.data = TREE_DATA;
//     } else {
//       this.deleteChildNode(nodeName);
//     }
//   }

//   deleteChildNode(nodeName: string): boolean {
//     let isDeleted = false;

//     function deleteChildNodeRecursive(nodes: FoodNode[]): boolean {
//       for (let i = 0; i < nodes.length; i++) {
//         const node = nodes[i];
//         if (node.children) {
//           const childIndex = node.children.findIndex(child => child.name === nodeName);
//           if (childIndex > -1) {
//             node.children.splice(childIndex, 1);
//             isDeleted = true;
//             break;
//           } else {
//             isDeleted = deleteChildNodeRecursive(node.children);
//             if (isDeleted) {
//               break;
//             }
//           }
//         }
//       }
//       return isDeleted;
//     }

//     isDeleted = deleteChildNodeRecursive(TREE_DATA);

//     if (isDeleted && this.dataSource) {
//       this.dataSource.data = TREE_DATA.slice();
//     }

//     return isDeleted;
//   }

//   editNode(node: FoodNode, newName: string) {
//     node.editing = true;

//     const findNode = (nodes: FoodNode[]): FoodNode | null => {
//       for (const n of nodes) {
//         if (n === node) {
//           n.name = newName;
//           return n;
//         }
//         if (n.children) {
//           const updatedChild = findNode(n.children);
//           if (updatedChild) {
//             return n;
//           }
//         }
//       }
//       return null;
//     };

//     const updatedNode = findNode(TREE_DATA);

//     if (updatedNode) {
//       // Do something with the updated node if needed
//     }
//   }

//   saveEdit(node: FoodNode) {
//     node.editing = false;
//   }

//   cancelEdit(node: FoodNode) {
//     node.editing = false;
//   }

//   openAddNodeDialog(parentNode: any): void {
//     const dialogRef = this.dialog.open(DialogViewComponent, {
//       width: '250px',
//       data: { parentNode }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result && parentNode) {
//         const childNode: FoodNode = result;
//         this.addChildNode(parentNode, childNode);
//       }
//     });
//   }

//   addChildNode(parentNodeName: string, childNode: FoodNode): boolean {
//     let isAdded = false;

//     function addChildNodeRecursive(nodes: FoodNode[]): boolean {
//       for (let i = 0; i < nodes.length; i++) {
//         const node = nodes[i];
//         if (node.name === parentNodeName) {
//           if (!node.children) {
//             node.children = [];
//           }
//           node.children.push(childNode);
//           isAdded = true;
          
//           break;
//         } else if (node.children) {
//           isAdded = addChildNodeRecursive(node.children);
//           if (isAdded) {
//             break;
//           }
//         }
//       }
//       return isAdded;
//     }

//     isAdded = addChildNodeRecursive(TREE_DATA);

//     if (isAdded && this.dataSource) {
//       this.expandedNodes[parentNodeName] = false;
//       this.dataSource.data = TREE_DATA.slice();

//     }

//     return isAdded;
//   }

//   addParentNode(name: string) {
//     TREE_DATA.push({ name, children: [] });
//     this.dataSource.data = TREE_DATA;
//   }

//   openAddParentNodeDialog(): void {
//     const dialogRef = this.dialog.open(DialogComponent, {
//       width: '250px',
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.addParentNode(result.name);
//       }
//     });
//   }
//   calculateNodeLevel(node: FoodNode): number {
//     let level = 0;
//     let currentNode = node;
//     while (currentNode.children) {
//       level++;
//       currentNode = currentNode.children[0]; // Traverse down to the first child
//     }
//     return level;
//   }
  

//   // updateExpansionState() {
//   //   for (const nodeName in this.expandedNodes) {
//   //     if (this.expandedNodes[nodeName]) {
//   //       const node = this.findNodeByName(nodeName);
//   //       if (node) {
//   //         const flatNode: ExampleFlatNode = {
//   //           expandable: !!node.children,
//   //           level: this.calculateNodeLevel(node), // Fix: Use 'this.' to refer to class member functions
//   //           name: node.name,
//   //           children: node.children ? node.children.map(this.convertFoodToFlat) : undefined // Fix: Use 'this.' to refer to class member functions
//   //         };

//   //         this.treeControl.expand(flatNode);
//   //       }
//   //     }
//   //   }
//   // }

//   // convertFoodToFlat(foodNode: FoodNode): ExampleFlatNode {
//   //   return {
//   //     expandable: !!foodNode.children,
//   //     level: this.calculateNodeLevel(foodNode), // Fix: Use 'this.' to refer to class member function
//   //     name: foodNode.name,
//   //     children: foodNode.children ? foodNode.children.map(this.convertFoodToFlat) : undefined
//   //   };
//   // }

  
  
  

//   findNodeByName(name: string): FoodNode | null {
//     function findNodeRecursive(nodes: FoodNode[]): FoodNode | null {
//       for (const node of nodes) {
//         if (node.name === name) {
//           return node;
//         }
//         if (node.children) {
//           const foundNode = findNodeRecursive(node.children);
//           if (foundNode) {
//             return foundNode;
//           }
//         }
//       }
//       return null;
//     }

//     return findNodeRecursive(TREE_DATA);
//   }

//   ngAfterViewInit() {
//     // this.updateExpansionState();
//   }
// }
import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { MatDialog } from '@angular/material/dialog';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { DialogComponent } from '../dialog/dialog.component';

export interface FoodNode {
  name: string;
  children?: FoodNode[];
  editing?: boolean;
  expanded?: boolean;
}

export const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
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
  private _transformer = (node: FoodNode, level: number) => {
    return {
      level: level,
      expandable: !!node.children && node.children.length > 0,
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
    this.dataSource.data = TREE_DATA;
    this.initializeExpansionState(TREE_DATA);
  }

  initializeExpansionState(nodes: FoodNode[]) {
    nodes.forEach(node => {
      if (node.children) {
        this.expandedNodes[node.name] = true; // Initialize expansion state
        this.initializeExpansionState(node.children);
      }
    });
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  deleteNode(node: FoodNode) {
    const nodeName = node.name;
    const index = TREE_DATA.findIndex(item => item.name === nodeName);

    if (index !== -1) {
      TREE_DATA.splice(index, 1);
       this.expandedNodes[nodeName] = true; // Remove expansion state
      this.dataSource.data = TREE_DATA;
    } else {
      this.deleteChildNode(nodeName);
    }
  }

  deleteChildNode(nodeName: string): boolean {
    let isDeleted = false;

    function deleteChildNodeRecursive(nodes: FoodNode[]): boolean {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.children) {
          const childIndex = node.children.findIndex(child => child.name === nodeName);
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
       this.expandedNodes[nodeName]= true; // Remove expansion state
      this.dataSource.data = TREE_DATA.slice();
    }

    return isDeleted;
  }

  editNode(node: FoodNode, newName: string) {
    node.editing = true;

    const findNode = (nodes: FoodNode[]): FoodNode | null => {
      for (const n of nodes) {
        if (n === node) {
          n.name = newName;
          return n;
        }
        if (n.children) {
          const updatedChild = findNode(n.children);
          if (updatedChild) {
            return n;
          }
        }
      }
      return null;
    };

    const updatedNode = findNode(TREE_DATA);

    if (updatedNode) {
      // Do something with the updated node if needed
    }
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

  addChildNode(parentNodeName: string, childNode: FoodNode): boolean {
    let isAdded = false;
    const self = this
    
    function addChildNodeRecursive(nodes: FoodNode[],): boolean {
      
      for (const node of nodes) {
        if (node.name === parentNodeName) {
          if (!node.children) {
            node.children = [];
          }
          node.children.push(childNode);
          isAdded = true;
          self.expandedNodes[parentNodeName] = true;  // Expand parent node
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
  

  addParentNode(name: string) {
    TREE_DATA.push({ name, children: [] });
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

  findNodeByName(name: string): FoodNode | null {
    function findNodeRecursive(nodes: FoodNode[]): FoodNode | null {
      for (const node of nodes) {
        if (node.name === name) {
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

}