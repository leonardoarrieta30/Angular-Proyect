import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDermatologistComponent } from './calendar-dermatologist.component';

describe('CalendarDermatologistComponent', () => {
  let component: CalendarDermatologistComponent;
  let fixture: ComponentFixture<CalendarDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
