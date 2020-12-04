import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storage: Storage;

  constructor() {
    this.storage = sessionStorage;
  }

  login(pw: string): boolean {
    if (pw === 'geheim') {
      this.storage.setItem('loggedIn', 'true');

      return true;
    }
    return false;
  }

  logout(): void {
    this.storage.removeItem('loggedIn');
  }

  isAuthenticated(): boolean {
    return this.storage.getItem('loggedIn') === 'true';
  }
}
