import { TestBed } from '@angular/core/testing';

import { ConvertDataService } from './convert-data.service';

describe('ConvertDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvertDataService = TestBed.get(ConvertDataService);
    expect(service).toBeTruthy();
  });
});
