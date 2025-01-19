import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   * 
   * @param authService 
   * @param router 
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  /**
   * canActivate interface implementation method
   * @param next 
   * @param state 
   * @returns 
   */
  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('./login');
      
      return false;
    } else {
      return true;
    }
  }

}