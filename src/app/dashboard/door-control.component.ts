import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import {Door} from './dashboard.component';
import {AppUrl} from '../app.component';

@Component ({
  selector: 'app-door-control',
  templateUrl: './doorcontrol.html',
  styleUrls: ['./door-control.component.css']
})
export class DoorControlComponent {


  @Input() door: Door;

  statusPercent: number;

  statusDoor: string;

  constructor(private http: Http) {
  }

  openDoor() {
    this.http.get(AppUrl.appURL + 'dashboard/open/' + this.door.name).subscribe();
  }

  closeDoor() {
    this.http.get(AppUrl.appURL + 'dashboard/close/' + this.door.name).subscribe();
  }

  stopDoor() {
    this.http.get(AppUrl.appURL + 'dashboard/stop/' + this.door.name).subscribe();
  }

  getStatusPercent() {
    this.http.get(AppUrl.appURL + 'api/doors/1/status/').subscribe(data => {
      this.statusPercent = Number(data['_body']);
    });

    this.getStatus();
    this.showProgress();
  }

  interval = setInterval(() => {
    this.getStatusPercent();
  }, 200);


  getStatus() {
    if (this.statusPercent < 10) {
      return this.statusDoor = 'Closed';
    } else if (this.statusPercent > 10 && this.statusPercent < 90) { // #1e2127
      return this.statusDoor = 'Moving';
    } else if (this.statusPercent > 90) {
      return this.statusDoor = 'Open';
    }
  }

  showProgress() {
    document.getElementsByClassName('list-group-progress')[0].setAttribute('style', 'width: 0; width: ' + this.statusPercent + '%');
  }

}
