import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCellRenderComponent } from './action-cell-render.component';

describe('ActionCellRenderComponent', () => {
  let component: ActionCellRenderComponent;
  let fixture: ComponentFixture<ActionCellRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCellRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCellRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
