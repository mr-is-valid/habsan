import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDotDialogComponent } from './add-dot-dialog.component';

describe('AddDotDialogComponent', () => {
  let component: AddDotDialogComponent;
  let fixture: ComponentFixture<AddDotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
