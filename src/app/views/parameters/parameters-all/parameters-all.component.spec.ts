import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersAllComponent } from './parameters-all.component';

describe('ParametersAllComponent', () => {
  let component: ParametersAllComponent;
  let fixture: ComponentFixture<ParametersAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametersAllComponent]
    });
    fixture = TestBed.createComponent(ParametersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
