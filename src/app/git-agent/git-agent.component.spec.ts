import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitAgentComponent } from './git-agent.component';

describe('GitAgentComponent', () => {
  let component: GitAgentComponent;
  let fixture: ComponentFixture<GitAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
