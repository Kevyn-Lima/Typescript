/*const soma = (a: number, b: number) => console.log(a + b)

soma(1, 2);*/



/*var a = 'a'
let b: number = 2 
const c = 'c'*/

/** Trabalhando com objetos dentro do typescript e interfaces. */

/*

export default interface Pessoa{
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'Kevyn',
    idade: 25
}

const outraPessoa: Pessoa = {
    nome:'Elizabeth',
    idade: 25,
    profissao: 'Desenvolvedora'
}

const arrayPessoa: Pessoa[] = [//"Pessoa[], aqui estou dizendo que meu array, é do tipo Pessoa, ou seja, que tem tipagem da interface"
    pessoa,outraPessoa
]

console.log(arrayPessoa)

const typeUser = {
    admin: 'Seja bem vindo Admin',
    student: 'Você é um estudante',
    viewer: 'você pode olhar'
}

const usuario = 'viewer'

function validateUser(user:string){
    console.log(typeUser[user as keyof typeof typeUser])
}

validateUser(usuario)*/

/** o código acima a partir do typeUser, é uma forma de utilizar uma estrutura de decisão, sem ser o IfElse
 * com um objeto literal, e uma função para fazer o papel daquilo que queremos obter
 */


/** Estrutura de repetição for no TS */
/*
for(let i = 1; i <= 15; i++){
    console.log(i)
}

let n = 0
while(n < 6){
    console.log(n)
    n++
}*/


/** Lidando com array, dentro do Typescript */

const stringArray: string[] = ['One', 'two', 'three', 'Four','five'] // string[] estou informando que é um array do tipo string
const array: Array<number> = [1, 2, 3, 4, 5]
const percorrendoArray: Array<string> = ['Um', 'dois', 'tres', 'Quatro','Cinco']

/*
for (const i of percorrendoArray) {
    console.log(i)
}
for (const i in array) {
    console.log(array[i])
}

for(let i = 0; i < stringArray.length; i++){
    console.log(stringArray[i])
}

const buscaNum = array.find(num => num === 4)
console.log(buscaNum)

const filtrarNum = array.filter(num => num > 1)
console.log(filtrarNum)

class User {
    nome: string = 'Kevyn'
    idade: number = 25

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    showName = () => console.log(this.nome)
    showIdade = () => console.log(this.idade)
}
const user = new User('Kevyn', 25)
const otherUser = new User('Elizabeth', 25)

user.showName();
user.showIdade();
otherUser.showName();
otherUser.showIdade();*/


// Dio Banking

// name, accountNumber
// depositar, sacar
/*
class Account{
    name: string
    accountNumber: number

    constructor(name:string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => 'you deposited'
    withdraw = () => 'you got it'
}

class Admin extends Account {
    balance: number
    constructor(name:string, accountNumber: number){
        super(name, accountNumber);
        this.balance = 20
    }
    getBalance = () => console.log(this.balance)
}

const adminAccount: Admin = new Admin('Kevyn', 1);
const account: Account = new Account('Elizabeth', 1245)

console.log(`${adminAccount.deposit()}: R$${adminAccount.balance},00`)
//console.log(account)*/


/** Abstract class, não pode criar nenhum objeto, não pode ser instanciada, ela serve de modelo, 
 *  utilizada para defenir valores que serão utilizados em comum em outras classes.
 */


import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"




const companyAccount: CompanyAccount = new CompanyAccount('DIO', 11)
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Kevyn', 10)

peopleAccount.deposit();
console.log(`A empresa depositou ${companyAccount.deposit()}`);