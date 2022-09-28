import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dermatologist2Component } from './dermatologist2.component';

describe('Dermatologist2Component', () => {
  let component: Dermatologist2Component;
  let fixture: ComponentFixture<Dermatologist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dermatologist2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dermatologist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
