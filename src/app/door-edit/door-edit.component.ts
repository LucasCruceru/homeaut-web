import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Door, GlobalVar} from '../app.component';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-door-edit',
  templateUrl: './door-edit.component.html',
  styleUrls: ['./door-edit.component.css']
})
export class DoorEditComponent implements OnInit {
  id: number;
  name: string;
  deviceComm: string;
  resultD: Door;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    GlobalVar.header = '';
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['dId'];
    });
  }

  ngOnInit() {
    this.getRequest();
  }

  getRequest() {
    this.http.get(GlobalVar.appURL + 'api/doors/' + this.id).subscribe(data => {
      this.resultD = data as Door;
    });
  }

  deleteRequest() {
    this.http.delete(GlobalVar.appURL + 'api/doors/' + this.id).subscribe();
  }

  putRequest() {
    if (!isNullOrUndefined(this.name)) {
      this.resultD.name = this.name;
    }
    if (!isNullOrUndefined(this.deviceComm)) {
      this.resultD.deviceComm = this.deviceComm;
    }
    this.http.put(GlobalVar.appURL + 'api/doors/' + this.id, this.resultD).subscribe();
  }
}
