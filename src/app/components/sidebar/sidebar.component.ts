import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // goHome() {
  //   this.router.navigate(['dashboard']);
  // }
  // goDeposit() {
  //   this.router.navigate(['dashboard']);
  // }
  // goCreateGoal() {
  //   this.router.navigate(['dashboard']);
  // }
}
