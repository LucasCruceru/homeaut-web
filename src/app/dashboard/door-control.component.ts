import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import {Door} from './dashboard.component';


@Component ({
  selector: 'app-door-control',
  templateUrl: './doorcontrol.html',
  styleUrls: ['./door-control.component.css']
})
export class DoorControlComponent {
  appURL = 'http://localhost:8080/dashboard';

  @Input() door: Door;

  statusPercent: number;

  status: string;

  constructor(private http: Http) {
  }

  openDoor() {
    this.http.get(this.appURL + '/open/' + this.door.name).subscribe();
  }

  closeDoor() {
    this.http.get(this.appURL + '/close/' + this.door.name).subscribe();
  }

  stopDoor() {
    this.http.get(this.appURL + '/stop/' + this.door.name).subscribe();
  }

  getStatusPercent() {
    this.http.get(this.appURL + '/status/' + this.door.name).subscribe(data => {
      this.statusPercent = data as any;
    });
  }

  getStatus() {
    if (this.statusPercent < 10) {
      this.status = 'Closed';
    }else if (this.statusPercent > 10 && this.statusPercent < 90) {
      this.status = 'Moving';
    } else if (this.statusPercent > 90) {
      this.status = 'Open';
    }
    }

}
