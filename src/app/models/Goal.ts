export class Goal {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public amount: number,
    public goalDate: Date,
    public fund: number
  ) {}
}
