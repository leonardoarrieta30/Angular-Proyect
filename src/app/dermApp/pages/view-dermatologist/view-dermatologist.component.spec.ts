import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDermatologistComponent } from './view-dermatologist.component';

describe('ViewDermatologistComponent', () => {
  let component: ViewDermatologistComponent;
  let fixture: ComponentFixture<ViewDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
