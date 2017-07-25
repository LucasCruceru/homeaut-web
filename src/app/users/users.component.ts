import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {User, GlobalVar} from '../app.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  results: User[];
  // id: number;
  // username: string;
  // password: string;
  searchId = 0;
  searchName: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    this.getAllRequest();
  }

  getAllRequest() {
    this.http.get(GlobalVar.appURL + 'users').subscribe(data => {this.results = data as any; });
    }
}

