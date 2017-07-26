import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Door, GlobalVar } from '../app.component';
import {DoorService} from '../door.service';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit {
  results: Door[];
  // id: number;
  // name: string;
  // deviceComm: string;
  searchId = 0;
  searchName: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private doorService: DoorService) {
    GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    this.getDoors();
  }

  getDoors(): void {
    this.doorService.getDoors()
      .then(doors => {
        console.log('me', doors);
        this.results = doors;
      });
  }

}
