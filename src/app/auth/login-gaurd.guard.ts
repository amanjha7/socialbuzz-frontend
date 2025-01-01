import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGaurdGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = localStorage.getItem('token'); // Or use any condition to check authentication
  
    if (isAuthenticated) {
      // If the user is authenticated, prevent access to login and register pages
      this.router.navigate(['/dashboard']); // or the default page you want to redirect to
      return false;
    }

    // If not authenticated, allow access to login and register pages
    return true;  }
  
}
