import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {Door, GlobalVar} from '../app.component';
import {Title} from '@angular/platform-browser';
import {isNullOrUndefined} from 'util';

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
  searchName: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle('All doors');
    GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    this.getAllRequest();
  }

  getAllRequest() {
    if (isNullOrUndefined(this.searchName)) {
      this.http.get(GlobalVar.appURL + 'api/doors').subscribe(data => {
        this.results = data as Door[];
      });
    } else {
      this.http.get(GlobalVar.appURL + 'api/doors').subscribe(data => {
        this.results = [];
        var resultsTemp = data as Door[];
        for (let i = 0; i < resultsTemp.length; i++) {
          var s = resultsTemp[i].name;
          if (s.indexOf(this.searchName) !== -1) {
            this.results.push(resultsTemp[i]);
          }
        }
      });
    }
  }
}
