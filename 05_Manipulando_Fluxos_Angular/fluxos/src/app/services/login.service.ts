import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
    localStorage.setItem('token', 'faskln33r3')
  }

  doLogout(){
    localStorage.clear()
  }
}
