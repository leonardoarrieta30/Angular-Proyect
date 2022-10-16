import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoctorPatientComponent } from './my-doctor-patient.component';

describe('MyDoctorPatientComponent', () => {
  let component: MyDoctorPatientComponent;
  let fixture: ComponentFixture<MyDoctorPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDoctorPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDoctorPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
