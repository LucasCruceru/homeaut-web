import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalVar} from '../app.component';
import {Title} from '@angular/platform-browser';

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



  // doors = DOORS;

  doors: any = [];



  ngOnInit(): void {
    this.getDoorData();
  }

  constructor(private http: Http, private titleService: Title) {
    this.titleService.setTitle('Dashboard');
  }

  getDoorData() {
    this.http.get(GlobalVar.appURL + 'dashboard')
      .map(response => response.json())
      .subscribe(data => {
        this.doors = data;
      });
  }

}
