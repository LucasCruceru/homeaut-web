import { Component, OnInit } from '@angular/core';
import { User, AppUrl } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = +params['uId'];
    });
  }

  ngOnInit() {
    this.getRequest();
  }

  getRequest() {
    this.http.get(AppUrl.appURL + 'users/' + this.id).subscribe(data => {this.resultU = data as any; });
  }

  deleteRequest() {
    this.http.delete(AppUrl.appURL + 'users/' + this.id).subscribe();
  }

  putRequest() {
    this.resultU.id = this.id;
    this.resultU.username = this.username;
    this.resultU.password = this.password;
    this.http.put(AppUrl.appURL + 'users/' + this.id, this.resultU).subscribe();
  }
}
