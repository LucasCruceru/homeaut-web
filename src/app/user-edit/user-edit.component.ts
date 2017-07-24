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
  name: string;
  password: string;
  result: User;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = +params['uId'];
    });
  }

  ngOnInit() {
    this.getRequest();
  }

  getRequest() {
    this.http.get(AppUrl.appURL + 'users/' + this.id).subscribe(data => {this.result = data as any; });
  }

  deleteRequest() {
    this.http.delete(AppUrl.appURL + 'users/' + this.id).subscribe();
  }

  /*putRequest() {
    this.http.put(AppUrl.appURL + 'users/')
  }*/
}
