import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailCoordComponent } from './order-detail-coord.component';

describe('OrderDetailCoordComponent', () => {
  let component: OrderDetailCoordComponent;
  let fixture: ComponentFixture<OrderDetailCoordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailCoordComponent]
    });
    fixture = TestBed.createComponent(OrderDetailCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
