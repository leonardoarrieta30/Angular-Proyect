import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDermatologistComponent } from './profile-dermatologist.component';

describe('ProfileDermatologistComponent', () => {
  let component: ProfileDermatologistComponent;
  let fixture: ComponentFixture<ProfileDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
