import { Component, 
  OnInit, 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade:number = 0

  adicionar() {
    this.quantidade++
  }

  diminuir() {
    this.quantidade--
  }

  constructor() {
    console.log('constructor')
   }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
    }
  ngAfterViewInit(): void {
     console.log('ngAfterViewInit') 
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngOnDestroy(): void {
    console.log('Good-bye my friend')
  }
}
