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
console.log(aniversatio.toString())

