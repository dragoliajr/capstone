import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fund } from 'src/app/models/Fund';
import { Goal } from 'src/app/models/Goal';
import { UpdateEvent } from '../Fund-Interface';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  funds: Fund[] = new Array<Fund>();
  fund!: Fund;
  totalFunds: number = 100;

  constructor() {}

  ngOnInit(): void {}

  addToDeposit(newDeposit: Fund) {
    this.funds.push(newDeposit);
    this.totalFunds += newDeposit.amount;
  }

  subtractFromDeposit(subDeposit: Fund) {
    let index = this.funds.indexOf(subDeposit);
    this.funds.splice(index, 1);
    this.totalFunds -= subDeposit.amount;
  }

  updateItemDeposit(updateEvent: UpdateEvent) {
    this.funds[this.funds.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalFunds -= updateEvent.old.amount;
    this.totalFunds += updateEvent.new.amount;
  }
}
