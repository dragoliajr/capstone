import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss'],
})
export class UpdateFormComponent implements OnInit {
  id!: number;

  @Input() goal!: Goal;
  @Output() formSubmit: EventEmitter<Goal> = new EventEmitter<Goal>();
  isNewItem!: boolean;
  constructor(
    private goalService: GoalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (this.goal) {
      this.isNewItem = true;
    } else this.isNewItem = false;
    this.goal = new Goal(0, '', '', 0, new Date(''),0);
  }

  saveGoal() {
    this.goalService.updateGoal(this.id, this.goal).subscribe((data: any) => {
      console.log(data);
      this.goal.id;
      this.goal.title;
      console.log(this.goal.title);
      this.goal.description;
      console.log(this.goal.description);
      this.goal.amount;
      console.log(this.goal.amount);
      this.goal.goalDate;
      console.log(this.goal.goalDate);
      this.goToDashboard();
    });
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  onSubmit(form: NgForm) {
    console.log(this.goal);
    this.saveGoal();
    this.formSubmit.emit(form.value);
  }
}
