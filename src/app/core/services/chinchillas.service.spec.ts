/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChinchillasService } from './chinchillas.service';

describe('Service: Chinchillas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChinchillasService]
    });
  });

  it('should ...', inject([ChinchillasService], (service: ChinchillasService) => {
    expect(service).toBeTruthy();
  }));
});
