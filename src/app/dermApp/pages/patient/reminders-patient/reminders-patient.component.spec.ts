import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersPatientComponent } from './reminders-patient.component';

describe('RemindersPatientComponent', () => {
  let component: RemindersPatientComponent;
  let fixture: ComponentFixture<RemindersPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemindersPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemindersPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
