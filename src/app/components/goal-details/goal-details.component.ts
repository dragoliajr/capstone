import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fund } from 'src/app/models/Fund';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss'],
})
export class GoalDetailsComponent implements OnInit {
  constructor(
    private goalService: GoalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  id!: number;
  goal!: Goal;
  goals!: Goal[];
  fund!: Fund;
  depositAmount!: number;
  originalAmount!: number;
  withdrawalAmount!:number

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.goal = new Goal(0, '', '', 0, new Date(''),0);
    this.fund = new Fund('',0);
    this.goalService.getGoalById(this.id).subscribe((data) => {
      console.log(data);
      this.goal = data;
      
    });
    
  }

  public addFund(newFunds: number) {

    //this.goal.amount =(this.goal.amount)-Number(newFunds);
    this.goal.fund += Number(newFunds);
    console.log(this.goal.fund);
    this.saveGoal();
}
public withdrawFund(newFund: number) {

  this.goal.fund -= Number(newFund);
    console.log(this.goal.fund);
    this.saveGoal();

 

}
  deleteGoal(id: number) {
    this.goalService.deleteGoal(id).subscribe((data) => {
      console.log(data);
      this.getGoals();
      this.router.navigate(['/dashboard']);
    });
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
      this.goal.fund;
      console.log(this.goal.fund);
     
    });
  }
    goToDashboard() {
      this.router.navigate(['/dashboard']);
    }
 

 
  private getGoals() {
    this.goalService.getGoalsList().subscribe((data) => {
      this.goals = data;
    });
  }

  goToUpdate(id: number) {
    this.router.navigate(['update-goal', id]);
  }

  //countdown implementation
  countdownFillIn() {
    let daysItem = document.getElementById('#days');
    let hoursItem = document.getElementById('#hours');
    let minItem = document.getElementById('#min');
    let secItem = document.getElementById('#sec');
    let dateItem = this.goal.goalDate;

    let countDown = () => {
      let countDownDate = new Date(dateItem);

      // Update the count down every 1 second
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date();

        // Find the distance between now and the count down date
        var distance = countDownDate.getTime() - now.getTime();

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // daysItem.innerHTML = days.toString();
        // hoursItem.innerHTML = hours.toString();
        // minItem.innerHTML = minutes.toString();
        // secItem.innerHTML = seconds.toString();
      }, 1000);
    };
  }
}
