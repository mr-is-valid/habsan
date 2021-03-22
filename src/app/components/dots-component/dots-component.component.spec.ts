import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsComponentComponent } from './dots-component.component';

describe('DotsComponentComponent', () => {
  let component: DotsComponentComponent;
  let fixture: ComponentFixture<DotsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
