import { TestBed } from '@angular/core/testing';

import { SuperupdatelogService } from './superupdatelog.service';

describe('SuperupdatelogService', () => {
  let service: SuperupdatelogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperupdatelogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
