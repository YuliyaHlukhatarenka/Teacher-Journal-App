import { TestBed } from '@angular/core/testing';

import { CalculateAverageService } from './calculate-average.service';

describe('CalculateAverageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateAverageService = TestBed.get(CalculateAverageService);
    expect(service).toBeTruthy();
  });
});
