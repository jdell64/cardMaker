import { TestBed, inject } from '@angular/core/testing';

import { TsvReaderService } from './tsv-reader.service';

describe('TsvReaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TsvReaderService]
    });
  });

  it('should ...', inject([TsvReaderService], (service: TsvReaderService) => {
    expect(service).toBeTruthy();
  }));
});
