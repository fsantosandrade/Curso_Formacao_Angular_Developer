import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType:string = ''

  constructor() { 
    this.produtos = [
      'mouse',
      'teclado',
      'gabinete',
      'caixa de som'
    ]
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.pop()
  }

  remover(produto: number) {
    this.produtos.splice(produto, 1)
  }
}
