import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileDermatologistComponent } from './edit-profile-dermatologist.component';

describe('EditProfileDermatologistComponent', () => {
  let component: EditProfileDermatologistComponent;
  let fixture: ComponentFixture<EditProfileDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
