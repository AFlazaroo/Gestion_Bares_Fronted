import { TestBed } from '@angular/core/testing';

import { BebidaServiceService } from './bebida-service.service';

describe('BebidaServiceService', () => {
  let service: BebidaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BebidaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
