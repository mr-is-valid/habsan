import { TestBed } from '@angular/core/testing';

import { HabsanApiService } from './habsan-api.service';

describe('HabsanApiService', () => {
  let service: HabsanApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabsanApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
