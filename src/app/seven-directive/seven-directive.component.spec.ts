import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenDirectiveComponent } from './seven-directive.component';

describe('SevenDirectiveComponent', () => {
  let component: SevenDirectiveComponent;
  let fixture: ComponentFixture<SevenDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
