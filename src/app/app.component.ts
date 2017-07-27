import {Component, Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

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
    this.password = password;
  }
}

export class GlobalVar {
  // public static appURL = 'http://192.168.216.233:8080/';
  public static appURL = 'http://localhost:8080/';
  public static header = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <router-outlet></router-outlet>`
})
export class AppComponent {

  public constructor(private titleService: Title) {
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
