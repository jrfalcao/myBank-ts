export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true
  private amount: number = 0

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus()){
      this.amount += deposit;
      console.log("Seu saldo atual é: " + this.amount)
    }
  }

  withdraw = (value: number): void => {
    this.amount -= value;
    console.log(`Voce sacou: ${value} \n Seu saldo atual é: ${this.amount}`)
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance += value
  }

  getAmount = (): number => {
    return this.amount;
  }

  setAmount = (value: number): void => {
    this.amount += value
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
