import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ct-covered-cases',
  templateUrl: './covered-cases.component.html',
  styleUrls: ['./covered-cases.component.scss']
})
export class CoveredCasesComponent implements OnInit {
  dataSource: Observable<any>;
  data: any = [];

  view: any[] = [800, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;

  constructor(private http: HttpClient) {
    this.dataSource = this.http.get('/api/getCaseStatistics');
  }

  ngOnInit() {
    const lineData = [];
    this.dataSource.subscribe(data => {
      const results: any = data.results;
      results.forEach(d => {
        lineData.push({
          name: d.version,
          value: d.caseCount
        });
      });
      this.data.push({
        name: 'Covered Cases',
        series: lineData
      });
    });
  }

  onSelect(event) {
    console.log(event);
  }
}










