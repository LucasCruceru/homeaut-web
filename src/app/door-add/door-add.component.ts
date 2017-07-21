import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Door } from '../app.component';

@Component({
  selector: 'app-door-add',
  templateUrl: './door-add.component.html',
  styleUrls: ['./door-add.component.css']
})
export class DoorAddComponent implements OnInit {

  appURL = 'http://localhost:8080/';
  id: number;
  name: string;
  pinNr: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  postRequest() {
    this.http.post(this.appURL + 'doors/', new Door(this.id, this.name, this.pinNr)).subscribe();
  }
}
