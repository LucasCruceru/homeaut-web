import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {DoorControlComponent} from './door-control.component';
import { AppUrl } from '../app.component';

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

  // appURL = 'http://localhost:8080/dashboard';


  doors = DOORS;


  ngOnInit(): void {
    this.getDoorData();
  }

  constructor(private http: Http) {
  }

  getDoorData() {
    // this.http.get(this.appURL).subscribe(data => {
    //   this.doors = data as any;
    // })
  }

}
