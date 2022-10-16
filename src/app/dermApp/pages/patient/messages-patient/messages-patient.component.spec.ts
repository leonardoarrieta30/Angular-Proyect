import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesPatientComponent } from './messages-patient.component';

describe('MessagesPatientComponent', () => {
  let component: MessagesPatientComponent;
  let fixture: ComponentFixture<MessagesPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
