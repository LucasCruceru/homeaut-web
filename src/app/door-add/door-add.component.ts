import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {Door, GlobalVar} from '../app.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-door-add',
  templateUrl: './door-add.component.html',
  styleUrls: ['./door-add.component.css']
})
export class DoorAddComponent implements OnInit {
  id: number;
  name: string;
  deviceComm: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle('Add door');
    GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
  }

  postRequest() {
    this.http.post(GlobalVar.appURL + 'api/doors/', new Door(this.id, this.name, this.deviceComm)).subscribe();
  }
}
