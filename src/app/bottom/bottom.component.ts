import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openLink(event: MouseEvent): void {
    this._bottomSheet.dismiss(); // You can still dismiss the sheet here
    event.preventDefault();
  }
}
