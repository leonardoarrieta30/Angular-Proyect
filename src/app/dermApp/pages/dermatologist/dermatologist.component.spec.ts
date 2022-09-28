import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermatologistComponent } from './dermatologist.component';

describe('DermatologistComponent', () => {
  let component: DermatologistComponent;
  let fixture: ComponentFixture<DermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
