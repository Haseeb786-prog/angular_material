import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDataDialogComponent } from './select-data-dialog.component';

describe('SelectDataDialogComponent', () => {
  let component: SelectDataDialogComponent;
  let fixture: ComponentFixture<SelectDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectDataDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
