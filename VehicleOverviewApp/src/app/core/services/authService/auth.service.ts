import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  /**
   * 
   * @param router 
   */
  constructor(
    private router: Router
  ) {
    let userStorage: any = localStorage.getItem('token');
    this.userSubject = new BehaviorSubject<any>(JSON.parse(userStorage));

    this.user = this.userSubject.asObservable();
  }

  /**
   * Get userSubject value
   * @returns 
   */
  public userValue(): any {
    return this.userSubject.value;
  }

  /**
   * Login user method, set token item to local storage
   * 
   * @param username 
   * @param password 
   * @returns 
   */
  public login(username: string, password: string): any {
    this.userSubject.next({
      username: username,
      password: password
    });

    localStorage.setItem('token', JSON.stringify({
      username: username,
      password: password
    }));

    return {
      username: username,
      password: password
    };
  }

  /**
   * User logout method, delete token from local storage
   */
  public logout(): void {
    this.userSubject.next(null);

    // remove user from localstorage
    localStorage.removeItem('token');

    this.router.navigate(['./login']);
  }

  /**
   * Check if token is already logged in
   */
  public isAuthenticated(): boolean {
    // Get token from localstorage
    const token = localStorage.getItem("token");

    // Check to see if token exists, if not return false
    return !!token;
  }
}