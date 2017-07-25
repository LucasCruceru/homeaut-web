import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Door, GlobalVar } from '../app.component';

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

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    this.getAllRequest();
  }

  getAllRequest() {
    this.http.get(GlobalVar.appURL + 'api/doors').subscribe(data => {this.results = data as any; });
  }
}
