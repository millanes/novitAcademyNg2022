import { TestBed } from '@angular/core/testing';

import { CatService } from './cat-service.service';

describe('CatServiceService', () => {
  let service: CatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
