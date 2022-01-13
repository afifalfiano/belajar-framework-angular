import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoComponentLifecycleComponent } from './two-component-lifecycle.component';

describe('TwoComponentLifecycleComponent', () => {
  let component: TwoComponentLifecycleComponent;
  let fixture: ComponentFixture<TwoComponentLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoComponentLifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoComponentLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
