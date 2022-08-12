class Funds {
  constructor(user, goal, funds) {
    this.funds = funds;
    this.user = user;
    this.goal = goal;
  }

  addFund() {
    return (this.funds += newFunds);
  }
  removeFund(newFunds) {
    return (this.funds -= newFunds);
  }

  //goal: make a function that reallocate the funds base what we need to pay off a goal
}

// class goal{
//     constructor(user, description, totalExpense){
//         this.user = user;
//         this.description = description;
//         this.totalExpense = totalExpense;

//     }

// }

const bill = new Funds("bill", 300);
console.log(bill.addFund(25));
console.log(bill.removeFund(50));
