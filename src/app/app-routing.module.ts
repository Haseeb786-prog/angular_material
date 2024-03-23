import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { AppComponent } from './app.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { FormsComponent } from './forms/forms.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { StepperComponent } from './stepper/stepper.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [
{
  path:'table' ,
  component:TableComponent
},
{
  path:'tree',
  component:TreeComponent
},
{
  path:'bottom_sheet',
  component:BottomSheetComponent
},
{
  path:'forms',
  component:FormsComponent
},
{
  path:'select',
  component:RadioButtonComponent
},
{
  path:'stepper',
  component:StepperComponent
},
{
  path:'Check_Box',
  component:CheckboxComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
