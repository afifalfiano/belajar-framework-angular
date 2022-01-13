import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineRoutingNavigationComponent } from './nine-routing-navigation.component';

describe('NineRoutingNavigationComponent', () => {
  let component: NineRoutingNavigationComponent;
  let fixture: ComponentFixture<NineRoutingNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NineRoutingNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NineRoutingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
