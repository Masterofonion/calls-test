import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loginPropertyName = '_currentCallsAppUser';
  constructor() {}
  login(userName: string, userPassword: string) {
    let user = { userName: userName, userPassword: userPassword };
    let userStr = JSON.stringify(user);
    localStorage.setItem(this.loginPropertyName, userStr);
  }
  logout() {
    localStorage.setItem(this.loginPropertyName, '');
  }
  isUserLoggedIn() {
    if (localStorage.getItem(this.loginPropertyName)) {
      return true;
    } else {
      return false;
    }
  }
}
