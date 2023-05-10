/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomFactService } from './random-fact.service';

describe('Service: RandomFact', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomFactService]
    });
  });

  it('should ...', inject([RandomFactService], (service: RandomFactService) => {
    expect(service).toBeTruthy();
  }));
});
