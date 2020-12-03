import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(pw: string): boolean {
    if (pw === 'geheim') {
      sessionStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
     sessionStorage.removeItem('loggedIn');
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('loggedIn') === 'true';
  }
}
