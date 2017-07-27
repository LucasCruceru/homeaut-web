import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { User, GlobalVar } from '../app.component';
import {Title} from '@angular/platform-browser';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  username: string;
  password: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute,
    private titleService: Title, private userService: UserService) {
      this.titleService.setTitle('Add user');
      GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
  }

  gotoUsers(): void {
    this.router.navigate(['/users/all']);
  }

  addUser(): void {
    this.userService.create(this.username, this.password)
      .then(door => {this.gotoUsers(); });
  }
}
