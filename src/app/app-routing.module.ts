import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { DepositComponent } from './components/deposit/deposit.component';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
import { GoalFormComponent } from './components/goal-form/goal-form.component';
import { BoardAdminComponent } from './Login/board-admin/board-admin.component';
import { BoardModeratorComponent } from './Login/board-moderator/board-moderator.component';
import { BoardUserComponent } from './Login/board-user/board-user.component';
import { HomeComponent } from './Login/home/home.component';
import { LoginComponent } from './Login/login/login.component';
import { ProfileComponent } from './Login/profile/profile.component';
import { RegisterComponent } from './Login/register/register.component';
import { Goal } from './models/Goal';
import { UpdateFormComponent } from './components/update-form/update-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-goal', component: GoalFormComponent },
  { path: 'update-goal/:id', component: UpdateFormComponent },
  { path: 'goal-details/:id', component: GoalDetailsComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
