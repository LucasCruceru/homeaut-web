import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import {Door} from './dashboard.component';


@Component ({
  selector: 'app-door-control',
  templateUrl: './doorcontrol.html',
  styleUrls: ['./door-control.component.css']
})
export class DoorControlComponent {
  appURL = 'http://192.168.216.233:8080';

  @Input() door: Door;

  statusPercent: number;

  statusDoor: string;

  constructor(private http: Http) {
  }

  openDoor() {
    this.http.get(this.appURL + '/dashboard/open/' + this.door.name).subscribe()
  }

  closeDoor() {
    this.http.get(this.appURL + '/dashboard/close/' + this.door.name).subscribe()
  }

  stopDoor() {
    this.http.get(this.appURL + '/dashboard/stop/' + this.door.name).subscribe()
  }

  getStatusPercent() {
    this.http.get(this.appURL + '/dashboard/status/' + this.door.name).subscribe(data => {
      this.statusPercent = Number(data["_body"]);
    })

    this.getStatus();
    this.showProgress();
    this.disable();
  }

  interval = setInterval(() => {
    this.getStatusPercent()
  }, 200);


  getStatus() {
    if (this.statusPercent < 5) {
      return this.statusDoor = "Closed";
    } else if (this.statusPercent > 5 && this.statusPercent < 95) {
      return this.statusDoor = "Moving";
    } else if (this.statusPercent > 95) {
      return this.statusDoor = "Open";
    }
  }

  showProgress(){
    document.getElementsByClassName("list-group-progress")[0].setAttribute("style", "width: 0; width: " + this.statusPercent + "%");
  }

  disable(){
    if (this.statusPercent < 5) {
      document.getElementById("1").removeAttribute("disabled");
      document.getElementById("2").setAttribute("disabled", "");
      document.getElementById("3").setAttribute("disabled", "");
      // return this.statusDoor = "Closed";
    } else if (this.statusPercent > 5 && this.statusPercent < 95) {
      document.getElementById("1").removeAttribute("disabled");
      document.getElementById("2").removeAttribute("disabled");
      document.getElementById("3").removeAttribute("disabled");
      //return this.statusDoor = "Moving";
    } else if (this.statusPercent > 95) {
      document.getElementById("1").setAttribute("disabled", "");
      document.getElementById("2").removeAttribute("disabled");
      document.getElementById("3").setAttribute("disabled", "");
      //return this.statusDoor = "Open";
    }
  }
}
