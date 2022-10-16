import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPatientSpecificComponent } from './info-patient-specific.component';

describe('InfoPatientSpecificComponent', () => {
  let component: InfoPatientSpecificComponent;
  let fixture: ComponentFixture<InfoPatientSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPatientSpecificComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPatientSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
