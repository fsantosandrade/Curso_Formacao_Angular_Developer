"use strict";
/*
    variaveis
*/
//tipos primitivos: boolean, number, string
let ligado = true;
let nome = 'Felipe';
let idade = 20;
//tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let qualquer = 2;
//objeto - sem previsibilidade
let produto = {
    name: 'Felipe',
    idade: 20
};
let meuProduto = {
    name: 'Tênis',
    preco: 250.00,
    unidades: 13
};
//arrays de mesmo tipo
let dados = ['Felipe', 'Cristyane'];
let dados2 = [2, 3];
//array de mais de um tipo
let dados3 = ['Felipe', 20];
//tuplas (Dita a ordem dos tipos)
let boleto = ['Conta de Luz', 199.99, 34124243];
//arrays métodos (São os mesmos do javascript)
//Datas
let aniversatio = new Date();
console.log(aniversatio.toString());
