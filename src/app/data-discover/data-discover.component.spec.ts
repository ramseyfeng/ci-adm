import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDiscoverComponent } from './data-discover.component';

describe('DataDiscoverComponent', () => {
  let component: DataDiscoverComponent;
  let fixture: ComponentFixture<DataDiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDiscoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
