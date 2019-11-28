import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'ct-data-discover',
  templateUrl: './data-discover.component.html',
  styleUrls: ['./data-discover.component.scss']
})
export class DataDiscoverComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  reason = '';
  constructor() { }

  ngOnInit() {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
