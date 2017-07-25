import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
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
  searchName: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    this.getAllRequest();
  }

  getAllRequest() {
    if (this.searchName == null || this.searchName === '') {
      this.http.get(GlobalVar.appURL + 'users').subscribe(data => {
        this.results = data as User[];
      });
    } else {
      this.http.get(GlobalVar.appURL + 'users').subscribe(data => {
        this.results = [];
        var resultsTemp = data as User[];
        for (let i = 0; i < resultsTemp.length; i++) {
          var s = resultsTemp[i].username;
          if (s.indexOf(this.searchName) !== -1) {
            this.results.push(resultsTemp[i]);
          }
        }
      });
    }
  }
}
