import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFilesPatientComponent } from './my-files-patient.component';

describe('MyFilesPatientComponent', () => {
  let component: MyFilesPatientComponent;
  let fixture: ComponentFixture<MyFilesPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFilesPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFilesPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
