import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeViewEncapsulationComponent } from './three-view-encapsulation.component';

describe('ThreeViewEncapsulationComponent', () => {
  let component: ThreeViewEncapsulationComponent;
  let fixture: ComponentFixture<ThreeViewEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeViewEncapsulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeViewEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
