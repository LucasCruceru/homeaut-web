import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {Door, GlobalVar} from '../app.component';
import {Title} from '@angular/platform-browser';
import {isNullOrUndefined} from 'util';
import {DoorService} from '../door.service';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit {
  results: Door[];
  searchName: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute,
    private titleService: Title, private doorService: DoorService) {
      this.titleService.setTitle('All doors');
      GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    this.getDoors();
  }

  getDoors(): void {
    this.doorService.getAll()
      .then(doors => {this.results = doors; });
  }

  getSearch(): void {
    this.doorService.getAll()
      .then(doors => {
        this.results = [];
        const resultsTemp = doors;
        for (let i = 0; i < resultsTemp.length; i++) {
          const s = resultsTemp[i].name;
          if (s.indexOf(this.searchName) !== -1) {
            this.results.push(resultsTemp[i]);
          }
        }
      });
  }
}
