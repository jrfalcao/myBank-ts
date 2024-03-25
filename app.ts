import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10.0)
peopleAccount.withdraw(2.0)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(5.5)
companyAccount.withdraw(1.5)
console.log(companyAccount)