import { TestBed } from '@angular/core/testing';

import { AppMessageService } from './appMessage.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppMessageService = TestBed.get(AppMessageService);
    expect(service).toBeTruthy();
  });
});
