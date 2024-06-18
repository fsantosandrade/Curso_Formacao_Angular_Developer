import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
  isAliveCheckSample: boolean = true

  dispose():void {
    if(this.isAliveCheckSample == true) {
      this.isAliveCheckSample = false
    }else {
      this.isAliveCheckSample = true
    }
  }
}
