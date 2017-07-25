import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {DoorsComponent} from './doors/doors.component';
import {UserAddComponent} from './user-add/user-add.component';
import {DoorAddComponent} from './door-add/door-add.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {DoorEditComponent} from './door-edit/door-edit.component';
import {AppRoutingModule} from './app-routing.module';
import {DoorControlComponent} from './dashboard/door-control.component';
import {HttpModule} from '@angular/http';
import { DoorsBareComponent } from './doors-bare/doors-bare.component';
import { UsersBareComponent } from './users-bare/users-bare.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DoorControlComponent,
    DashboardComponent,
    UsersComponent,
    DoorsComponent,
    UserAddComponent,
    DoorAddComponent,
    UserEditComponent,
    DoorEditComponent,
    DoorsBareComponent,
    UsersBareComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
