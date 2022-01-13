import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourComponentInteractionComponent } from './four-component-interaction.component';

describe('FourComponentInteractionComponent', () => {
  let component: FourComponentInteractionComponent;
  let fixture: ComponentFixture<FourComponentInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourComponentInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourComponentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
