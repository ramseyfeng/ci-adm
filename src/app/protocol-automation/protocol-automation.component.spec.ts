import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolAutomationComponent } from './protocol-automation.component';

describe('ProtocolAutomationComponent', () => {
  let component: ProtocolAutomationComponent;
  let fixture: ComponentFixture<ProtocolAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
