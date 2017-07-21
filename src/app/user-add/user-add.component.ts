import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app.component';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  appURL = 'http://localhost:8080/';
  id: number;
  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  postRequest() {
    this.http.post(this.appURL + 'users/', new User(this.id, this.username, this.password)).subscribe();
  }
}
