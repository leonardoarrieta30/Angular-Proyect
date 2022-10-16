import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPDermatologistComponent } from './card-p-dermatologist.component';

describe('CardPDermatologistComponent', () => {
  let component: CardPDermatologistComponent;
  let fixture: ComponentFixture<CardPDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
