export abstract class DIOAccount{
    private name: string
    accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name:string, accountNumber: number){ 
        this.name = name
        this.accountNumber = accountNumber
    }

    //Assinatura do método para poder alterar o nome privado
    setName = (name: string): string =>{
        this.name = name
        return `Name changed, ${name}`
    }
    getName = (): string => {return this.name}
    deposit = (): void => {
        if(this.validateStatus()){
            console.log('você depositou')
        }
    }
    withdraw = (): void => console.log('you got it')
    getBalance = (): void => console.log(this.balance)
    private validateStatus = (): boolean => {
        if(this.status === true){
            return this.status
        }
        throw new Error('Conta está cancelada')
    }
}

