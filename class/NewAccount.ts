import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        this.setAmount(value + 10)
    }
}
