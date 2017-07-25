import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {User, GlobalVar} from '../app.component';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: number;
  username: string;
  oldPassword: string;
  newPassword: string;
  resultU: User;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    GlobalVar.header = '';
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['uId'];
    });
  }

  ngOnInit() {
    this.getRequest();
    // this.id = this.resultU.id;
    // this.username = this.resultU.username;
    // this.password = this.resultU.password;
  }

  getRequest() {
    this.http.get(GlobalVar.appURL + 'users/' + this.id).subscribe(data => {
      this.resultU = data as any;
    });
  }

  deleteRequest() {
    this.http.delete(GlobalVar.appURL + 'users/' + this.id).subscribe();
  }

  putRequest() {
    // if (this.oldPassword === this.resultU.password) {
    if (!isNullOrUndefined(this.username)) {
      this.resultU.username = this.username;
    }
    if (!isNullOrUndefined(this.newPassword)) {
      this.resultU.password = this.newPassword;
    }
    this.http.put(GlobalVar.appURL + 'users/'/* + this.id*/, this.resultU).subscribe();
    // }
  }
}
