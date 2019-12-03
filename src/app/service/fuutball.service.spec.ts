import { TestBed } from '@angular/core/testing';

import { FuutballService } from './fuutball.service';

describe('FuutballService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuutballService = TestBed.get(FuutballService);
    expect(service).toBeTruthy();
  });
});
