export abstract class DIOAccount{
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name:string, accountNumber: number){ 
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => 'you deposited'
    withdraw = () => 'you got it'
    getBalance = () => console.log(this.balance)
}

