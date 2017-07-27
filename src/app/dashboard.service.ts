import {Injectable} from '@angular/core';
import {Door, GlobalVar} from './app.component';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {isNullOrUndefined} from 'util';

@Injectable()
export class DashboardService {
  private headers = new Headers({'Content-Type': 'application/json'});

  getAll(): Promise<Door[]> {
    return this.http
      .get(GlobalVar.appURL + 'dashboard')
      .toPromise()
      .then(response => response.json() as Door[])
      .catch(this.handleError);
  }

  open(name: string): Promise<any> {
    return this.http
      .get(GlobalVar.appURL + '/dashboard/open/' + name)
      .toPromise()
      .then(resp => resp)
      .catch(this.handleError);
  }

  close(name: string): Promise<any> {
    return this.http
    .get(GlobalVar.appURL + '/dashboard/close/' + name)
    .toPromise()
    .then(resp => resp)
    .catch(this.handleError);
  }

  stop(name: string): Promise<any> {
    return this.http
    .get(GlobalVar.appURL + '/dashboard/stop/' + name)
    .toPromise()
    .then(resp => resp)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }
}
