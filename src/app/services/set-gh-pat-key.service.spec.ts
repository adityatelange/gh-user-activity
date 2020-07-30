import { TestBed } from '@angular/core/testing';

import { SetGhPatKeyService } from './set-gh-pat-key.service';

describe('SetGhPatKeyService', () => {
  let service: SetGhPatKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetGhPatKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
