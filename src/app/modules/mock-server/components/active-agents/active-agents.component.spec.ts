import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAgentsComponent } from './active-agents.component';

describe('ActiveAgentsComponent', () => {
  let component: ActiveAgentsComponent;
  let fixture: ComponentFixture<ActiveAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
