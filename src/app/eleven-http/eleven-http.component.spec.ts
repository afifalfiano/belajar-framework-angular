import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenHttpComponent } from './eleven-http.component';

describe('ElevenHttpComponent', () => {
  let component: ElevenHttpComponent;
  let fixture: ComponentFixture<ElevenHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevenHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevenHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
