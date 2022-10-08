import { TestBed } from '@angular/core/testing';

import { DermatologistsService } from './dermatologists.service';

describe('DermatologistsService', () => {
  let service: DermatologistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DermatologistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
