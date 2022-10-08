import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDermatologistComponent } from './chat-dermatologist.component';

describe('ChatDermatologistComponent', () => {
  let component: ChatDermatologistComponent;
  let fixture: ComponentFixture<ChatDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
