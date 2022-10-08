import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDoctorComponent } from './schedule-doctor.component';

describe('ScheduleDoctorComponent', () => {
  let component: ScheduleDoctorComponent;
  let fixture: ComponentFixture<ScheduleDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
