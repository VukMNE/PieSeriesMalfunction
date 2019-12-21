export class TransactionsMyGroupPieChartRow {
  userId: number;
  amountCollected: number;
  amountSpent: number;
  username: string;

  constructor(obj: any) {
    this.userId = obj.userId;
    this.username = obj.username;
    this.amountCollected = obj.amountCollected;
    this.amountSpent = obj.amountSpent;
    

  }
}
