import { DIOAccount } from "./DioAccount"

export class CompanyAccount extends DIOAccount{
    
    constructor(name:string, accountNumber: number){
        super(name,accountNumber)
    }
    getLoan = () => {
        console.log('Você pegou um emprestimo')
    }
}
