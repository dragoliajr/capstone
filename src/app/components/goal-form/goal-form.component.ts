import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.scss'],
})
export class GoalFormComponent implements OnInit {
  @Input() goal!: Goal;
  @Output() formSubmit: EventEmitter<Goal> = new EventEmitter<Goal>();

  isNewItem!: boolean;

  // goal: Goal = new Goal();

  constructor(private goalService: GoalService, private router: Router) {}

  ngOnInit(): void {
    if (this.goal) {
      this.isNewItem = false;
    } else this.isNewItem = true;
    this.goal = new Goal(0, '', '', 0, new Date(''),0);
  }

  saveGoal() {
    this.goalService.createGoal(this.goal).subscribe((data: any) => {
      console.log(data);
      this.goToDashboard;
    });
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  onSubmit(form: NgForm) {
    console.log(this.goal);
    this.saveGoal();
    this.formSubmit.emit(form.value);
    form.reset();
    this.router.navigate(['/dashboard']);
  }

  // CreateForm = new FormGroup({

  // })
}
