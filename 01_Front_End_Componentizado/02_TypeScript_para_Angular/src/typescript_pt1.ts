/*
    variaveis
*/

//tipos primitivos: boolean, number, string
    let ligado: boolean = true
    let nome: string = 'Felipe'
    let idade: number = 20

//tipos especiais: null, undefined
let nulo: null = null
let indefinido: undefined = undefined

//tipos abrangentes: any, void
let retorno: void
let qualquer: any = 2

//objeto - sem previsibilidade
let produto: object = {
    name: 'Felipe',
    idade: 20
}

//objeto - com previsibilidade
type ProdutoLoja = {
    name: string
    preco: number
    unidades: number
}

let meuProduto: ProdutoLoja = {
    name: 'Tênis',
    preco: 250.00,
    unidades: 13

}

//arrays de mesmo tipo
let dados: string[] = ['Felipe', 'Cristyane']
let dados2: Array<number> = [2, 3]

//array de mais de um tipo
let dados3: (string | number)[] = ['Felipe', 20]

//tuplas (Dita a ordem dos tipos)
let boleto:[string, number, number] = ['Conta de Luz', 199.99, 34124243]

//arrays métodos (São os mesmos do javascript)

//Datas 
let aniversatio: Date = new Date()      

//funções (agora tipadas)
function addNumber(x: number, y: number): number {
    return x + y
}

function callToPhone(phone: number | string): number | string {
    return phone
}

let soma: number = addNumber(5, 7)

//funções async
async function getDataBase(i: number): Promise<string> {
    return 'Felipe'
}

//interfaces (type x interface)
//mais para tipagens simples
type robot = {
    readonly id: number | string //readonly torna a propriedade inalterável 
    name: string
}

//utilizado mais com classes
interface robot2 {
    readonly id: number | string
    name: string
    sayHello(): string
}

const bot1: robot = {
    id: 1,
    name: 'megaman'
}

class Pessoa implements robot2 {
    id: string | number
    name: string
    
    constructor(id: number | string, name: string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `Hello ${this.name}`
    }
}

const pessoa = new Pessoa(1, 'Felipe')
console.log(pessoa.sayHello())