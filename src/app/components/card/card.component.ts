import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Fund } from 'src/app/models/Fund';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  goals!: Goal[];
  

  constructor(private goalService: GoalService, private router: Router) {}

  ngOnInit(): void {
    this.getGoals();
  }

  goalDetails(id: number) {
    this.router.navigate(['goal-details', id]);
  }

  private getGoals() {
    this.goalService.getGoalsList().subscribe((data) => {
      this.goals = data;
    });
  }
}
