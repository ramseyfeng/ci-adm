import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'ct-data-discover-collection',
  templateUrl: './data-discover-collection.component.html',
  styleUrls: ['./data-discover-collection.component.scss']
})
export class DataDiscoverCollectionComponent implements OnInit {
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
