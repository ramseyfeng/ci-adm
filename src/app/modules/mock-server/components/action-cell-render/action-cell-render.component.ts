import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'ct-action-cell-render',
  templateUrl: './action-cell-render.component.html',
  styleUrls: ['./action-cell-render.component.scss']
})
export class ActionCellRenderComponent implements ICellRendererAngularComp {
  params;
  label;

  constructor() {}

  agInit(params): void {
    this.params = params;
    this.label = this.params.label;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event): void {
    this.params.onClick({
      $event,
      rowData: this.params.node.data
    });
  }
}
