import { TestBed, async } from '@angular/core/testing';

import { ConvertDataService } from './convert-data.service';
import { DecimalPipe } from '@angular/common';

describe('ConvertDataService', () => {
beforeEach(async(() => {
  TestBed.configureTestingModule({
    providers: [
      DecimalPipe
    ]}).compileComponents();
  }));

it('should be created', () => {
    const service: ConvertDataService = TestBed.get(ConvertDataService);
    expect(service).toBeTruthy();
  });
});
