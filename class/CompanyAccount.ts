import { DIOAccount } from "./DioAccount"

export class CompanyAccount extends DIOAccount{
    
    constructor(name:string, accountNumber: number){
        super(name,accountNumber)
    }
    getLoan = (): void => {
        console.log('Você pegou um emprestimo')
    }
    /** Utilizando polimorfismo 
     * Sobreescrevemos o metodo que estava na DIOAccount
     * e assim conseguimos mudar o que vem do metodo da
     * DIOAccount especifico para a CompanyAccount.
    */
    deposit = (): number => {
        return this.balance = 250
    } 
}
