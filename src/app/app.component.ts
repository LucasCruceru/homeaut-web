import {Component, Injectable} from '@angular/core';

export class Door {
  id: number;
  name: string;
  deviceComm: string;
  constructor(id: number, name: string, deviceComm: string) {
    this.id = id;
    this.name = name;
    this.deviceComm = deviceComm;
  }
}

export class User {
  id: number;
  username: string;
  password: string;
  constructor(id: number, username: string, password: string) {
    this.id = id;
    this.username = username;
    this. password = password;
  }
}

export class AppUrl {
  public static appURL = 'http://192.168.216.233:8080/';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'Homeaut';

  constructor() { }
}
