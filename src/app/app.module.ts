import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormsComponent } from './forms/forms.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TreeComponent } from './tree/tree.component';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { BottomComponent } from './bottom/bottom.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { AsyncPipe } from '@angular/common';
import { Observable, map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DateComponent } from './date/date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { DialogViewComponent } from './dialog-view/dialog-view.component';
import { MAT_DIALOG_DATA,   MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { SelectComponent } from './select/select.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { SelectDataDialogComponent } from './select-data-dialog/select-data-dialog.component';

// import { AddTreeComponent } from './add-tree/add-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormsComponent,
    TreeComponent,
    BottomSheetComponent,
    BottomComponent,
    CheckboxComponent,
    RadioButtonComponent,
    StepperComponent,
    DateComponent,
   
    DialogViewComponent,
    SelectComponent,
    DialogComponent,
    EditDialogComponent,
    SelectDataDialogComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSort,
    MatSortModule,
    MatPaginator,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    // MatTreeFlatDataSource,
    //  MatTreeFlattener,
      MatTreeModule,
      MatIconModule,
      MatButtonModule,
      // MatBottomSheet
      MatBottomSheetModule,
      // MatBottomSheetRef
      MatListModule,
      MatButtonModule,
      MatCheckboxModule,
      FormsModule,
      MatStepperModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      AsyncPipe,
      MatDatepickerModule,
      MatDialogClose,
      MatDialogActions,
      MatDialogContent,
      MatDialogTitle,
      MatButtonModule,
      MatDialogModule,
      MatDialogModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      MatDialogClose,
      MatDialogActions,
      MatDialogContent,
      MatDialogTitle,
      FormsModule,

      
  
    
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
