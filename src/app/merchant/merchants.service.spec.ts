import { TestBed } from '@angular/core/testing';

import { MerchantsService } from './services/merchants.service';

describe('MerchantsService', () => {
  let service: MerchantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
