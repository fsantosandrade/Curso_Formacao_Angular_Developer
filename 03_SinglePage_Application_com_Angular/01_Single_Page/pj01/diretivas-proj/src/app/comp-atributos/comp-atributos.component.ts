import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo:string = 'disable'
  corFundo:string = 'red'
  corFonte:string = 'white'
  item:string = ''
  lista:string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  trocar() {
    if(this.estilo === 'enable'){
      this.estilo = 'disable'
    }else {
      this.estilo = 'enable'
    }
  }

  adicionar() {
    this.lista.push(this.item)
  }
}
