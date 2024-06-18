import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome:string = 'cu'

  constructor() { 
    console.log(`contrutor ${this.nome}`)
  }

  ngOnChanges(): void {
    console.log(`Fuib alterado ${this.nome}`)
  }
  
  ngOnInit(): void {
    console.log('Iniciei')
  }

}
