import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDialogComponent } from './switch-dialog.component';

describe('AddDotDialogComponent', () => {
  let component: SwitchDialogComponent;
  let fixture: ComponentFixture<SwitchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
