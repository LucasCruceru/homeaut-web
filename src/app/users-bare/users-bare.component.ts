import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalVar } from '../app.component';

@Component({
  selector: 'app-users-bare',
  templateUrl: './users-bare.component.html',
  styleUrls: ['./users-bare.component.css']
})
export class UsersBareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nameheader(): string {
    switch (GlobalVar.header) {
      case 'all': {
        return 'All Users';
      }
      case 'add': {
        return 'Add User';
      }
      default: {
        return 'Edit User';
      }
    }
  }
}
