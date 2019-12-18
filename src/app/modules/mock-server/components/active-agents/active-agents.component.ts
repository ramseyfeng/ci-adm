import {Component, OnInit} from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import {GitAgentService} from '../../../../core/services/git-agent.service';
import {IAgent} from '../../../../shared/models/agent';
import {ActionCellRenderComponent} from '../action-cell-render/action-cell-render.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ct-active-agents',
  templateUrl: './active-agents.component.html',
  styleUrls: ['./active-agents.component.scss']
})
export class ActiveAgentsComponent implements OnInit {
  rowData: IAgent[] = [];
  columnDefs: any;
  modules: any;

  gridApi: any;
  columnApi: any;

  private columns = [
    'agentName',
    'tenant',
    'pid',
    'associateFile',
    'isStarted'
  ];
  frameworkComponents: any;

  constructor(private agentService: GitAgentService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.modules = AllCommunityModules;
    this.frameworkComponents = {buttonRenderer: ActionCellRenderComponent};
    this.agentService.getAgents().subscribe({
      next: agents => (this.rowData = agents)
    });
    this.agentService.agentAdded$.subscribe({
      next: agent => {
        this.toastr.success('Agent Added', agent.agentName);
        this.gridApi.updateRowData({add: [agent], addIndex: 1});
        console.log(agent);
      }
    });

    this.columnDefs = this.columns.map(col => {
      return {
        headerName: col
          .replace('_', ' ')
          .replace(/\b\w/g, l => l.toUpperCase()),
        field: col,
        sortable: true,
        filter: true
      };
    });

    this.columnDefs.push({
      field: 'Operations',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick.bind(this),
        label: 'Delete'
      }
    });

  }

  onBtnClick(params) {
    const agent = params.rowData as IAgent;
    this.gridApi.setRowData(this.rowData.filter(data => data.pid !== agent.pid));
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    window.onresize = () => {
      this.gridApi.sizeColumnsToFit();
    };
  }

  deleteAll() {
    console.log('delete all');
  }
}
