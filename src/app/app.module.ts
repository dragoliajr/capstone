import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';

import { HttpClientModule } from '@angular/common/http';
import { DepositComponent } from './components/deposit/deposit.component';
import { GoalFormComponent } from './components/goal-form/goal-form.component';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';

import { ProfileComponent } from './Login/profile/profile.component';
import { BoardAdminComponent } from './Login/board-admin/board-admin.component';
import { BoardModeratorComponent } from './Login/board-moderator/board-moderator.component';
import { BoardUserComponent } from './Login/board-user/board-user.component';
import { HomeComponent } from './Login/home/home.component';
import { httpInterceptorProviders } from './Login/_helpers/http.interceptor';
import { InlineNavbarComponent } from './components/inline-navbar/inline-navbar.component';
import { TestComponent } from './components/test/test.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { DepositFormComponent } from './components/deposit-form/deposit-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    CardComponent,
    ProgressCircleComponent,
    DepositComponent,
    GoalFormComponent,
    GoalDetailsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent,
    InlineNavbarComponent,
    TestComponent,
    UpdateFormComponent,
    DepositFormComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
