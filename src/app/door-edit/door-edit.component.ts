import { Component, OnInit } from '@angular/core';
import { Door, AppUrl } from '../app.component';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-door-edit',
  templateUrl: './door-edit.component.html',
  styleUrls: ['./door-edit.component.css']
})
export class DoorEditComponent implements OnInit {
  id: number;
  name: string;
  pinNr: number;
  result: Door;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = +params['dId'];
    });
  }

  ngOnInit() {
    this.getRequest();
  }

  getRequest() {
    this.http.get(AppUrl.appURL + 'doors/' + this.id).subscribe(data => {this.result = data as any; });
  }

  deleteRequest() {
    this.http.delete(AppUrl.appURL + 'doors/' + this.id).subscribe();
  }

  /*putRequest() {
    this.http.put(this.appURL + 'doors/' + this.id, )
  }*/
}
