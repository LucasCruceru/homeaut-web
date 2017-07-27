import {Injectable} from '@angular/core';
import {User, GlobalVar} from './app.component';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {isNullOrUndefined} from 'util';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});

  getAll(): Promise<User[]> {
    return this.http
      .get(GlobalVar.appURL + 'users')
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getOne(id: number): Promise<User> {
    return this.http
      .get(GlobalVar.appURL + 'users/' + id)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  create(username: string, password: string): Promise<User> {
    return this.http
      .post(GlobalVar.appURL + 'users', JSON.stringify({username: username, password: password}), {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  update(id: number, username: string, /*oldPassword: string,*/ newPassword: string, elem: User): Promise<User> {
    // if (this.oldPassword === this.resultU.password){
    if (!isNullOrUndefined(username)) {
      elem.username = username;
    }
    if (!isNullOrUndefined(newPassword)) {
      elem.password = newPassword;
    }
    // }
    return this.http
      .put(GlobalVar.appURL + 'users', JSON.stringify(elem), {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  delete(id: number): Promise<User> {
    return this.http
      .delete(GlobalVar.appURL + 'users/' + id)
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
