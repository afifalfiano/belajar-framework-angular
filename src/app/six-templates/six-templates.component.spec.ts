import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixTemplatesComponent } from './six-templates.component';

describe('SixTemplatesComponent', () => {
  let component: SixTemplatesComponent;
  let fixture: ComponentFixture<SixTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
