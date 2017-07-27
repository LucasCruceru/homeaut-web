import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Door, GlobalVar} from '../app.component';
import {isNullOrUndefined} from 'util';
import {Title} from '@angular/platform-browser';
import {DoorService} from '../door.service';
import {DeviceCommList} from '../DeviceCommList';

@Component({
  selector: 'app-door-edit',
  templateUrl: './door-edit.component.html',
  styleUrls: ['./door-edit.component.css']
})
export class DoorEditComponent implements OnInit {
  id: number;
  name: string;
  deviceCommList = DeviceCommList.deviceCommList;
  selectedComm = DeviceCommList.selectedComm;
  resultD: Door;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute,
    private titleService: Title, private doorService: DoorService) {
      this.titleService.setTitle('Modify door');
      GlobalVar.header = '';
      this.activatedRoute.params.subscribe(params => {
        this.id = +params['dId'];
    });
  }

  ngOnInit() {
    this.getDoor();
  }

  gotoDoors(): void {
    this.router.navigate(['/doors/all']);
  }

  getDoor(): void {
    this.doorService.getOne(this.id)
      .then(door => {this.resultD = door; this.selectedComm = this.resultD.deviceComm; });
  }

  deleteDoor(): void {
    this.doorService.delete(this.id)
      .then(door => {this.gotoDoors(); });
  }

  updateDoor(): void {
    this.doorService.update(this.id, this.name, this.selectedComm, this.resultD)
      .then(door => {this.gotoDoors(); });
  }
}
