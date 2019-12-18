import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

@Component({
  selector: 'ct-sync-apis',
  templateUrl: './sync-apis.component.html',
  styleUrls: ['./sync-apis.component.scss']
})
export class SyncApisComponent implements OnInit {
  private dataSource: Observable<any>;
  private statsDataSource: Observable<any>;

  columns = ['id', 'method', 'api_name', 'status', 'owner', 'owner_id', 'comments'];
  private statisticsData: any;

  columnDefs = this.columns.map(col => {
    return {
      headerName: col.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      field: col,
      sortable: true,
      filter: true
    };
  });

  rowData: any;

  modules = AllCommunityModules;

  constructor(private http: HttpClient) {
    this.dataSource = this.http.get('/api-lists');
    this.statsDataSource = this.http.get('/api/statistics');
  }

  ngOnInit() {
    this.dataSource.subscribe(data => {
      this.rowData = data.results;
    });
    this.statsDataSource.subscribe(data => {
      this.statisticsData = data.results;
    });
  }

}
