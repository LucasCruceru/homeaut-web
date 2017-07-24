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
  deviceComm: string;
  resultD: Door;


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = +params['dId'];
    });
  }

  ngOnInit() {
    this.getRequest();
  }

  getRequest() {
    this.http.get(AppUrl.appURL + 'api/doors/' + this.id).subscribe(data => {this.resultD = data as Door; });
  }

  deleteRequest() {
    this.http.delete(AppUrl.appURL + 'api/doors/' + this.id).subscribe();
  }

  putRequest() {
    this.resultD.id = this.id;
    this.resultD.name = this.name;
    this.resultD.deviceComm = this.deviceComm;
    this.http.put(AppUrl.appURL + 'api/doors/' + this.id, this.resultD).subscribe();
  }
}
