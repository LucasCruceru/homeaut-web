import { Component } from '@angular/core';

export class Door {
  id: number;
  name: string;
  pinNr: number;
  constructor(id: number, name: string, pinNr: number) {
    this.id = id;
    this.name = name;
    this.pinNr = pinNr;
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
