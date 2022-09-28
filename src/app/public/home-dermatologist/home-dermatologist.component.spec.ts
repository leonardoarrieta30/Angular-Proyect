import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDermatologistComponent } from './home-dermatologist.component';

describe('HomeDermatologistComponent', () => {
  let component: HomeDermatologistComponent;
  let fixture: ComponentFixture<HomeDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
