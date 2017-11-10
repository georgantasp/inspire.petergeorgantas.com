import { TestBed, inject } from '@angular/core/testing';

import { HomescoreService } from './homescore.service';

describe('HomescoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomescoreService]
    });
  });

  it('should be created', inject([HomescoreService], (service: HomescoreService) => {
    expect(service).toBeTruthy();
  }));
});
