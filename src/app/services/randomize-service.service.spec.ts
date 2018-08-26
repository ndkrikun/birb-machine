import { TestBed, inject } from '@angular/core/testing';

import { RandomizeServiceService } from './randomize-service.service';

describe('RandomizeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomizeServiceService]
    });
  });

  it('should be created', inject([RandomizeServiceService], (service: RandomizeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
