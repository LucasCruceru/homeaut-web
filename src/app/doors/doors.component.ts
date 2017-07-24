import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Door, AppUrl } from '../app.component';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit {

  results: Door[];
  id: number;
  name: string;
  pinNr: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllRequest();
  }

  getAllRequest() {
    this.http.get(AppUrl.appURL + 'doors/getAll').subscribe(data => {this.results = data as any; });
  }
}
