import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/Goal';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  constructor() {}

  goal: Goal = new Goal(1, 'Test', 'testing123', 150.0, new Date('2022-08-11'),0);
}
