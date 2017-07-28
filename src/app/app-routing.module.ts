import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { DoorsComponent } from './doors/doors.component';
import { UserAddComponent } from './user-add/user-add.component';
import { DoorAddComponent } from './door-add/door-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { DoorEditComponent } from './door-edit/door-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DoorsBareComponent} from './doors-bare/doors-bare.component';
import {UsersBareComponent} from './users-bare/users-bare.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},

  {path: 'dashboard', component: DashboardComponent},

  {path: 'doors', component: DoorsBareComponent,
    children: [
      {path: '', redirectTo: 'all', pathMatch: 'prefix'},
      {path: 'all', component: DoorsComponent},
      {path: 'add', component: DoorAddComponent},
      {path: ':id', component: DoorEditComponent}
    ]},

  {path: 'users', component: UsersBareComponent,
    children: [
      {path: '', redirectTo: 'all', pathMatch: 'prefix'},
      {path: 'all', component: UsersComponent},
      {path: 'add', component: UserAddComponent},
      {path: ':id', component: UserEditComponent}
    ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
