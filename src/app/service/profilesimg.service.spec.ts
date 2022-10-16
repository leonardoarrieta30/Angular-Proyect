import { TestBed } from '@angular/core/testing';

import { ProfilesimgService } from './profilesimg.service';

describe('ProfilesimgService', () => {
  let service: ProfilesimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilesimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
