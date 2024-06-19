import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { BodyListComponent } from './body-list/body-list.component';



@NgModule({
  declarations: [
    InputComponent,
    BodyListComponent
  ],
  exports: [
    InputComponent,
    BodyListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListaModule { }
