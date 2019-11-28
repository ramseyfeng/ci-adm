import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncApisComponent } from './sync-apis.component';

describe('SyncApisComponent', () => {
  let component: SyncApisComponent;
  let fixture: ComponentFixture<SyncApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
