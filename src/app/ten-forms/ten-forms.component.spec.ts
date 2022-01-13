import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenFormsComponent } from './ten-forms.component';

describe('TenFormsComponent', () => {
  let component: TenFormsComponent;
  let fixture: ComponentFixture<TenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
