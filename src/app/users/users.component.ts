import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  appURL = 'http://localhost:8080/';
  results: User[];
  id: number;
  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllRequest();
  }

  getAllRequest() {
    this.http.get(this.appURL + 'users').subscribe(data => {this.results = data as any; });
  }
}
