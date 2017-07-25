import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { User, GlobalVar } from '../app.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: number;
  username: string;
  password: string;
  resultU: User;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    GlobalVar.header = '';
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['uId'];
    });
  }

  ngOnInit() {
    this.getRequest();
  }

  getRequest() {
    this.http.get(GlobalVar.appURL + 'users/' + this.id).subscribe(data => {this.resultU = data as any; });
  }

  deleteRequest() {
    this.http.delete(GlobalVar.appURL + 'users/' + this.id).subscribe();
  }

  putRequest() {
    this.resultU.id = this.id;
    this.resultU.username = this.username;
    this.resultU.password = this.password;
    this.http.put(GlobalVar.appURL + 'users/' + this.id, this.resultU).subscribe();
  }
}
