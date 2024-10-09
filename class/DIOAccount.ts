export abstract class DIOAccount{
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name:string, accountNumber: number){ 
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (): void => console.log('you deposited')
    withdraw = (): void => console.log('you got it')
    getBalance = (): void => console.log(this.balance)
}

