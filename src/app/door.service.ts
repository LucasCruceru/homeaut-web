import {Injectable} from '@angular/core';
import {Door, GlobalVar} from './app.component';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {isNullOrUndefined} from 'util';

@Injectable()
export class DoorService {
  private headers = new Headers({'Content-Type': 'application/json'});

  getAll(): Promise<Door[]> {
    return this.http
      .get(GlobalVar.appURL + 'api/doors')
      .toPromise()
      .then(response => response.json() as Door[])
      .catch(this.handleError);
  }

  getOne(id: number): Promise<Door> {
    return this.http
      .get(GlobalVar.appURL + 'api/doors/' + id)
      .toPromise()
      .then(response => response.json() as Door)
      .catch(this.handleError);
  }

  create(name: string, deviceComm: string): Promise<Door> {
    return this.http
      .post(GlobalVar.appURL + 'api/doors', JSON.stringify({name: name, deviceComm: deviceComm}), {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  update(id: number, name: string, deviceComm: string, elem: Door): Promise<Door> {
    if (!isNullOrUndefined(name)) {
          elem.name = name;
    }
    if (!isNullOrUndefined(deviceComm)) {
      elem.deviceComm = deviceComm;
    }
    return this.http
      .put(GlobalVar.appURL + 'api/doors/' + id, JSON.stringify(elem), {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  delete(id: number): Promise<Door> {
    return this.http
      .delete(GlobalVar.appURL + 'api/doors/' + id)
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }
}
