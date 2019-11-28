import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDiscoverCollectionComponent } from './data-discover-collection.component';

describe('DataDiscoverCollectionComponent', () => {
  let component: DataDiscoverCollectionComponent;
  let fixture: ComponentFixture<DataDiscoverCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDiscoverCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDiscoverCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
