import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveredCasesComponent } from './covered-cases.component';

describe('CoveredCasesComponent', () => {
  let component: CoveredCasesComponent;
  let fixture: ComponentFixture<CoveredCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoveredCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveredCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
