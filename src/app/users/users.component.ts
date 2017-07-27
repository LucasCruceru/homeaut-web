import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {User, GlobalVar} from '../app.component';
import {Title} from '@angular/platform-browser';
import {isNullOrUndefined} from 'util';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  results: User[];
  searchName: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute,
    private titleService: Title, private userService: UserService) {
    this.titleService.setTitle('All users');
    GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAll()
      .then(users => {this.results = users; });
  }

  getSearch(): void {
    this.userService.getAll()
      .then(users => {
        this.results = [];
        const resultsTemp = users;
        for (let i = 0; i < resultsTemp.length; i++) {
          const s = resultsTemp[i].username;
          if (s.indexOf(this.searchName) !== -1) {
            this.results.push(resultsTemp[i]);
          }
        }
      });
  }
}
