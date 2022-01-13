import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveComponentStylesComponent } from './five-component-styles.component';

describe('FiveComponentStylesComponent', () => {
  let component: FiveComponentStylesComponent;
  let fixture: ComponentFixture<FiveComponentStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveComponentStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveComponentStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
