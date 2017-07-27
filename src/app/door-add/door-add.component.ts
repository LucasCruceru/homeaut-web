import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {Door, GlobalVar} from '../app.component';
import {Title} from '@angular/platform-browser';
import {DoorService} from '../door.service';

@Component({
  selector: 'app-door-add',
  templateUrl: './door-add.component.html',
  styleUrls: ['./door-add.component.css']
})
export class DoorAddComponent implements OnInit {
  name: string;
  deviceComm: string;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute,
    private titleService: Title, private doorService: DoorService) {
      this.titleService.setTitle('Add door');
      GlobalVar.header = activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
  }

  gotoDoors(): void {
    this.router.navigate(['/doors/all']);
  }

  addDoor(): void {
    this.doorService.create(this.name, this.deviceComm)
      .then(door => {this.gotoDoors(); });
  }
}
