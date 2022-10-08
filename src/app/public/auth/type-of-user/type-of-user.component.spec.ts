import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfUserComponent } from './type-of-user.component';

describe('TypeOfUserComponent', () => {
  let component: TypeOfUserComponent;
  let fixture: ComponentFixture<TypeOfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOfUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
