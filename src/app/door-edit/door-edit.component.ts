import { Component, OnInit } from '@angular/core';
import { Door } from '../app.component';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-door-edit',
  templateUrl: './door-edit.component.html',
  styleUrls: ['./door-edit.component.css']
})
export class DoorEditComponent implements OnInit {
  appURL = 'http://localhost:8080/';
  id: number;
  name: string;
  pinNr: number;
  result: Door;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getRequest();
  }

  getRequest() {
    this.http.get(this.appURL + 'doors/' + this.id).subscribe(data => {this.result = data as any; });
  }

  deleteRequest() {
    this.http.delete(this.appURL + 'doors/' + this.id).subscribe();
  }

  /*putRequest() {
    this.http.put(this.appURL + 'doors/' + this.id, )
  }*/
}
