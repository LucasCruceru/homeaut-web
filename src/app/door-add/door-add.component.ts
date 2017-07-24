import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Door, AppUrl } from '../app.component';

@Component({
  selector: 'app-door-add',
  templateUrl: './door-add.component.html',
  styleUrls: ['./door-add.component.css']
})
export class DoorAddComponent implements OnInit {
  id: number;
  name: string;
  deviceComm: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  postRequest() {
    this.http.post(AppUrl.appURL + 'doors/', new Door(this.id, this.name, this.deviceComm)).subscribe();
  }
}
