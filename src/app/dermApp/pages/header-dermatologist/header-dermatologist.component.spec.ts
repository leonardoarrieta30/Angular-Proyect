import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDermatologistComponent } from './header-dermatologist.component';

describe('HeaderDermatologistComponent', () => {
  let component: HeaderDermatologistComponent;
  let fixture: ComponentFixture<HeaderDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
