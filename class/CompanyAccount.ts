import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()){
      this.setAmount(value)
      console.log(`Voce pegou um empréstimo de: ${value}`)
    }
  }
}
