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

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'doors', component: DoorsComponent},
  {path: 'add-door', component: DoorAddComponent},
  {path: 'door/:id', component: DoorEditComponent},
  {path: 'users', component: UsersComponent},
  {path: 'add-user', component: UserAddComponent},
  {path: 'user/:id', component: UserEditComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
