import { TestBed } from '@angular/core/testing';

import { GitAgentService } from './git-agent.service';

describe('GitAgentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitAgentService = TestBed.get(GitAgentService);
    expect(service).toBeTruthy();
  });
});
