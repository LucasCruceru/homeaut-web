import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, AppUrl} from '../app.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  results: User[];
  id: number;
  username: string;
  password: string;


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getAllRequest();
  }

  getAllRequest() {
    this.http.get(AppUrl.appURL + 'users').subscribe(data => {this.results = data as any; });
    }
}

