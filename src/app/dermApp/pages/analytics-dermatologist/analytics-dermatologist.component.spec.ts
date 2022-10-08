import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsDermatologistComponent } from './analytics-dermatologist.component';

describe('AnalyticsDermatologistComponent', () => {
  let component: AnalyticsDermatologistComponent;
  let fixture: ComponentFixture<AnalyticsDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
