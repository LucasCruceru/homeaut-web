import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {User, GlobalVar} from '../app.component';
import {isNullOrUndefined} from 'util';
import {Title} from '@angular/platform-browser';
import {UserService} from '../user.service';

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

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute,
    private titleService: Title, private userService: UserService) {
      this.titleService.setTitle('Modify user');
      GlobalVar.header = '';
      this.activatedRoute.params.subscribe(params => {
        this.id = +params['uId'];
    });
  }

  ngOnInit() {
    this.getUser();
  }

  gotoUsers(): void {
    this.router.navigate(['/users/all']);
  }

  getUser(): void {
    this.userService.getOne(this.id)
      .then(user => {this.resultU = user; });
  }

  deleteUser(): void {
    this.userService.delete(this.id)
      .then(user => {this.gotoUsers(); });
  }

  updateUser(): void {
    this.userService.update(this.id, this.username, this.newPassword, this.resultU)
      .then(user => {this.gotoUsers(); });
  }
}
