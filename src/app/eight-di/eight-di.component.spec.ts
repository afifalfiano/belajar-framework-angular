import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightDIComponent } from './eight-di.component';

describe('EightDIComponent', () => {
  let component: EightDIComponent;
  let fixture: ComponentFixture<EightDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightDIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EightDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
