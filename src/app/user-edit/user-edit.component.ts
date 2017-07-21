import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  appURL = 'http://localhost:8080/';
  id: number;
  name: string;
  password: string;
  result: User;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRequest();
  }

  getRequest() {
    this.http.get(this.appURL + 'users/' + this.id).subscribe(data => {this.result = data as any; });
  }

  deleteRequest() {
    this.http.delete(this.appURL + 'users/' + this.id).subscribe();
  }

  /*putRequest() {
    this.http.put(this.appURL + 'users/')
  }*/
}
