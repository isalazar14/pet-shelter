import { TestBed } from '@angular/core/testing';

import { ApiPetsService } from './api.pets.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPetsService = TestBed.get(ApiPetsService);
    expect(service).toBeTruthy();
  });
});
