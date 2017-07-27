import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Title} from '@angular/platform-browser';
import {DashboardService} from '../dashboard.service';
import {GlobalVar} from "../app.component";

export class Door {

  id: number;
  name: string;
  deviceComm : string;

}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {


  doors: any = [];
  statusPercent1: number;
  statusPercent2: number;

  statusDoor1: string;
  statusDoor2: string;

  ngOnInit(): void {
    this.getDoorData();
  }

  constructor(private http: Http, private titleService: Title, private dashboardService: DashboardService) {
    this.titleService.setTitle('Dashboard');
  }

  openDoor(index: number) {
    this.http.get(GlobalVar.appURL + '/dashboard/open/' + this.doors[index].name).subscribe()
  }

  closeDoor(index: number) {
    this.http.get(GlobalVar.appURL + '/dashboard/close/' + this.doors[index].name).subscribe()
  }

  stopDoor(index: number) {
    this.http.get(GlobalVar.appURL + '/dashboard/stop/' + this.doors[index].name).subscribe()
  }

  getStatusPercentDoor1() {
    this.http.get(GlobalVar.appURL + '/dashboard/status/' + this.doors[0].name).subscribe(data => {
      this.statusPercent1 = data.json()[this.doors[0].deviceComm];
    });

    this.getStatus1();
    this.showProgress1();
    this.disable1();
  }

  getStatusPercentDoor2() {
    this.http.get(GlobalVar.appURL + '/dashboard/status/' + this.doors[1].name).subscribe(data => {
      this.statusPercent2 = data.json()[this.doors[1].deviceComm];
    });

    this.getStatus2();
    this.showProgress2();
    this.disable2();
  }

  interval = setInterval(() => {
    this.getStatusPercentDoor1();
    this.getStatusPercentDoor2();
  }, 200);


  getStatus1() {
    if (this.statusPercent1 < 5) {
      return this.statusDoor1 = "Closed";
    } else if (this.statusPercent1> 5 && this.statusPercent1 < 95) {
      return this.statusDoor1 = "Moving";
    } else if (this.statusPercent1 > 95) {
      return this.statusDoor1 = "Open";
    }
  }
  getStatus2() {
    if (this.statusPercent2 < 5) {
      return this.statusDoor2 = "Closed";
    } else if (this.statusPercent2 > 5 && this.statusPercent2 < 95) {
      return this.statusDoor2 = "Moving";
    } else if (this.statusPercent2 > 95) {
      return this.statusDoor2 = "Open";
    }
  }

  showProgress1(){
    document.getElementById("bar1").setAttribute("style", "width: 0; width: " + this.statusPercent1 + "%");
  }
  showProgress2(){
    document.getElementById("bar2").setAttribute("style", "width: 0; width: " + this.statusPercent2 + "%");
  }

  disable1(){
    if (this.statusPercent1 < 5) {
      document.getElementById("1").removeAttribute("disabled");
      document.getElementById("2").setAttribute("disabled", "");
      document.getElementById("3").setAttribute("disabled", "");
      // return this.statusDoor = "Closed";
    } else if (this.statusPercent1 > 5 && this.statusPercent1 < 95) {
      document.getElementById("1").removeAttribute("disabled");
      document.getElementById("2").removeAttribute("disabled");
      document.getElementById("3").removeAttribute("disabled");
      //return this.statusDoor = "Moving";
    } else if (this.statusPercent1 > 95) {
      document.getElementById("1").setAttribute("disabled", "");
      document.getElementById("2").removeAttribute("disabled");
      document.getElementById("3").setAttribute("disabled", "");
      //return this.statusDoor = "Open";
    }
  }
  disable2(){
    if (this.statusPercent2 < 5) {
      document.getElementById("4").removeAttribute("disabled");
      document.getElementById("5").setAttribute("disabled", "");
      document.getElementById("6").setAttribute("disabled", "");
      // return this.statusDoor = "Closed";
    } else if (this.statusPercent2 > 5 && this.statusPercent2 < 95) {
      document.getElementById("4").removeAttribute("disabled");
      document.getElementById("5").removeAttribute("disabled");
      document.getElementById("6").removeAttribute("disabled");
      //return this.statusDoor = "Moving";
    } else if (this.statusPercent2 > 95) {
      document.getElementById("4").setAttribute("disabled", "");
      document.getElementById("5").removeAttribute("disabled");
      document.getElementById("6").setAttribute("disabled", "");
      //return this.statusDoor = "Open";
    }
  }

  getDoorData() {
    this.dashboardService.getAll()
      .then(doors => {this.doors = doors; });
  }

  ngOnDestroy(): void {
    if(this.interval)
      clearInterval(this.interval);
  }

  // getDoorData() {
  //   this.http.get(GlobalVar.appURL + 'dashboard')
  //     .map(response => response.json())
  //     .subscribe(data => {
  //       this.doors = data;
  //     });
  // }

}
