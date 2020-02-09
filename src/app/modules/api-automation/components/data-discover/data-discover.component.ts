import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'ct-data-discover',
  templateUrl: './data-discover.component.html',
  styleUrls: ['./data-discover.component.scss']
})
export class DataDiscoverComponent implements OnInit {
  public links: any[];
  public activeLink: string;

  constructor() {
    this.links = [{
      label: 'Covered Cases',
      path: 'covered-cases'
    },
      {
        label: 'API Statistics',
        path: 'api-statistics'
      },
      {
        label: 'Owner Statistics',
        path: 'owner-statistics'
      }
    ];
    this.links.forEach(l => l.path = `/data-discover/data-discover-home/${l.path}`);
  }

  ngOnInit() {
  }

  selectedTabChange(tabChangeEvent: MatTabChangeEvent) {
    console.log(tabChangeEvent);
  }
}
