/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentChinchillaService } from './current-chinchilla.service';

describe('Service: CurrentChinchilla', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentChinchillaService]
    });
  });

  it('should ...', inject([CurrentChinchillaService], (service: CurrentChinchillaService) => {
    expect(service).toBeTruthy();
  }));
});
