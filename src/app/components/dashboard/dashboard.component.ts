import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Login/_services/user.service';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  goals!: Goal[];
  // content?: string;

  constructor(
    private goalService: GoalService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getGoals();
    this.getNewQuote();
  }

  private getGoals() {
    this.goalService.getGoalsList().subscribe((data) => {
      this.goals = data;
    });
  }

  getNewQuote = async () => {
    var url = 'https://type.fit/api/quotes';
    const response = await fetch(url);
    const allQuotes = await response.json();
    const indx = Math.floor(Math.random() * allQuotes.length);
    const quote = allQuotes[indx].text;
    const auth = allQuotes[indx].author;

    let text = document.getElementById('quoteDisplay');
    let author = document.getElementById('author');

    if (text != null) {
      text.innerHTML = quote;
      if (author != null) {
        author.innerHTML = '~ ' + auth;
      }
    }
  };
}
