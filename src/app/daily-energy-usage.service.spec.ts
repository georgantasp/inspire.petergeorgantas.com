import { TestBed, inject } from '@angular/core/testing';

import { DailyEnergyUsageService } from './daily-energy-usage.service';

describe('DailyEnergyUsageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyEnergyUsageService]
    });
  });

  it('should be created', inject([DailyEnergyUsageService], (service: DailyEnergyUsageService) => {
    expect(service).toBeTruthy();
  }));
});
