import { Component, OnInit} from '@angular/core';
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
  deviceComm: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getAllRequest();
  }

  getAllRequest() {
    this.http.get(AppUrl.appURL + 'api/doors/').subscribe(data => {this.results = data as any; });
  }
}
