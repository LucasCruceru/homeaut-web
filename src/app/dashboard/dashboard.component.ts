import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";

export class Door {

  id: number;
  name: string;

}

const DOORS: Door[] = [
  {id: 1, name: 'Front Door'},
  {id: 2, name: 'Back Door'},
  {id: 3, name: 'Garage Door'},
  {id: 4, name: 'Lucas'},

];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appURL = 'http://192.168.216.233:8080/dashboard';


  // doors = DOORS;

  doors: any = [];



  ngOnInit(): void {
    this.getDoorData();
  }

  constructor(private http: Http) {
  }

  getDoorData() {
    this.http.get(this.appURL)
      .map(response => response.json())
      .subscribe(data => {
        this.doors = data;
      })
  }

}
