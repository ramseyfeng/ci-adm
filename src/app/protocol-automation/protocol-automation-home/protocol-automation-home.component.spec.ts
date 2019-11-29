import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolAutomationHomeComponent } from './protocol-automation-home.component';

describe('ProtocolAutomationHomeComponent', () => {
  let component: ProtocolAutomationHomeComponent;
  let fixture: ComponentFixture<ProtocolAutomationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolAutomationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolAutomationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
