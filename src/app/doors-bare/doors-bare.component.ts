import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GlobalVar} from '../app.component';

@Component({
  selector: 'app-doors-bare',
  templateUrl: './doors-bare.component.html',
  styleUrls: ['./doors-bare.component.css']
})
export class DoorsBareComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  nameheader(): string {
    switch (GlobalVar.header) {
      case 'all': {
        return 'All Doors';
      }
      case 'add': {
        return 'Add Door';
      }
      default: {
        return 'Edit Door';
      }
    }
  }
}
