import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'ct-api-automation-home',
  templateUrl: './api-automation-home.component.html',
  styleUrls: ['./api-automation-home.component.scss']
})
export class ApiAutomationHomeComponent implements OnInit {
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
