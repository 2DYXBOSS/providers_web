import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListCoordComponent } from './order-list-coord.component';

describe('OrderListCoordComponent', () => {
  let component: OrderListCoordComponent;
  let fixture: ComponentFixture<OrderListCoordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderListCoordComponent]
    });
    fixture = TestBed.createComponent(OrderListCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
