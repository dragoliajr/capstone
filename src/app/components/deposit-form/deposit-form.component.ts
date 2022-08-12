import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fund } from 'src/app/models/Fund';
import { Goal } from 'src/app/models/Goal';

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrls: ['./deposit-form.component.scss'],
})
export class DepositFormComponent implements OnInit {
  goals!: Goal[];
  funds!: Fund[];
  totalFunds: number = 0;

  @Input() fund!: Fund;

  @Output() formSubmit: EventEmitter<Fund> = new EventEmitter<Fund>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    this.addToDeposit(form.value);
    form.reset();
  }

  addToDeposit(newDeposit: Fund) {
    this.funds.push(newDeposit);
    this.totalFunds += newDeposit.amount;
  }
}
