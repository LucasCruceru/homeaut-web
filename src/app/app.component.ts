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

  // get id(): number {
  //   return this.id;
  // }
  //
  // set id(value: number) {
  //   this.id = value;
  // }
  //
  // get name(): string {
  //   return this.name;
  // }
  //
  // set name(value: string) {
  //   this.name = value;
  // }
  //
  // get deviceComm(): string {
  //   return this.deviceComm;
  // }
  //
  // set deviceComm(value: string) {
  //   this.deviceComm = value;
  // }
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

  // get id(): number {
  //   return this.id;
  // }
  //
  // set id(value: number) {
  //   this.id = value;
  // }
  //
  // get username(): string {
  //   return this.username;
  // }
  //
  // set username(value: string) {
  //   this.username = value;
  // }
  //
  // get password(): string {
  //   return this.password;
  // }
  //
  // set password(value: string) {
  //   this.password = value;
  // }
}

export class GlobalVar {
  public static appURL = 'http://localhost:8080/';
  public static header = '';
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
