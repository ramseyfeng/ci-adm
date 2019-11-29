import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ct-owner-statistics',
  templateUrl: './owner-statistics.component.html',
  styleUrls: ['./owner-statistics.component.scss']
})
export class OwnerStatisticsComponent implements OnInit {

  isDataFetched = false;

  dataSource: Observable<any>;
  private groupedData: any = [];

  view: any[] = [800, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;

  constructor(private http: HttpClient) {
    this.dataSource = this.http.get('/api/countApiBasedOwner');
  }


  ngOnInit() {
    this.dataSource.subscribe(data => {
      const {results} = data;
      const {ownerArr} = data.results;
      ownerArr.forEach((owner, idx) => {
        const ownerData = {name: owner, series: []};
        for (const key of Object.keys(results)) {
          if (key === 'ownerArr') {
            continue;
          }
          ownerData.series.push({
            name: key,
            value: +results[key][idx]
          });
        }
        this.groupedData.push(ownerData);
      });
      this.isDataFetched = true;
      console.log(this.groupedData);
    });
  }


  onSelect(event) {
    console.log(event);
  }


}
