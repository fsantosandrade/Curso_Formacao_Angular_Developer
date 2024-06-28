import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private id: ActivatedRoute, private navegador: Router) {
    //Recuperar o id
    this.id.firstChild?.params.subscribe( res => console.log(res))

    //Recuperar os parametros
    this.id.firstChild?.queryParams.subscribe(res => console.log(res))
   }

  ngOnInit(): void {  
    //setInterval(() => {
     // this.navegador.navigate(['/'])
    //}, 5000)
  }

}
