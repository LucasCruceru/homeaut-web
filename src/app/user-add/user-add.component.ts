import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { User, GlobalVar } from '../app.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  id: number;
  username: string;
  password: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle('Add user');
    GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
  }

  postRequest() {
    this.http.post(GlobalVar.appURL + 'users/', new User(this.id, this.username, this.password)).subscribe();
  }
}
