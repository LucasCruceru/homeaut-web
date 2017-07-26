import { Injectable } from '@angular/core';
import {Door} from './app.component';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {toPromise} from 'rxjs/operator/toPromise';

@Injectable()
export class DoorService {
  private headers = new Headers({'Content-Type': 'application/json'});

  getDoors(): Promise<Door[]> {
    const url = 'api/doors';

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Door[])
      .catch(this.handleError);
  }

  create(door: Door ): Promise<Door> {
    const url = 'api/doors';

    return this.http
      .post(url, JSON.stringify({door: door}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Door)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

}
