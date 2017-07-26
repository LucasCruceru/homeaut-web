import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Door, GlobalVar } from '../app.component';
import {DoorService} from '../door.service';

@Component({
  selector: 'app-door-add',
  templateUrl: './door-add.component.html',
  styleUrls: ['./door-add.component.css']
})
export class DoorAddComponent implements OnInit {
  id: number;
  name: string;
  deviceComm: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private doorService: DoorService) {
    GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
  }

  // postRequest() {
  //   this.http.post(GlobalVar.appURL + 'api/doors/', new Door(this.id, this.name, this.deviceComm)).subscribe();
  //   this.router.navigate(['/doors/all']);
  // }

  addDoor(): void {
    const door = new Door(this.id, this.name, this.deviceComm);

    this.doorService.create(door)
      .then(door => {
        console.log('Created door: ', door);
      });
  }
}
