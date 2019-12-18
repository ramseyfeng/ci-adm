import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ct-api-statistics',
  templateUrl: './api-statistics.component.html',
  styleUrls: ['./api-statistics.component.scss']
})
export class ApiStatisticsComponent implements OnInit {


  dataSource: Observable<any>;

  products: any;

  view: any[] = [800, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;

  // showXAxisLabel = true;
  // xAxisLabel = 'Country';
  // showYAxisLabel = true;
  // yAxisLabel = 'Population';

  constructor(private http: HttpClient) {
    this.dataSource = this.http.get('/api/statistics');
  }

  ngOnInit() {
    this.dataSource.subscribe(data => {
      this.products = [];
      const results: any = data.results;
      const collect = {
        done_apis: 'Done',
        new_apis: 'New',
        skipped_apis: 'Skipped',
        obsoleted_apis: 'Obsoleted',
        progeress_apis: 'Progress',
        total_apis: 'Total'
      };
      const ck: any = Object.keys(collect);
      for (const key in results) {
        if (ck.indexOf(key) !== -1) {
          this.products.push({name: collect[key], value: results[key]});
        }
      }
    });
  }

  onSelect(event) {
    console.log(event);
  }


}
