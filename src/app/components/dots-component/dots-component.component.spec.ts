import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsComponent } from './dots-component.component';

describe('DotsComponentComponent', () => {
  let component: DotsComponent;
  let fixture: ComponentFixture<DotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
