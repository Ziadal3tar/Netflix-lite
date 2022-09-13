import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class Auth1Guard implements CanDeactivate<unknown> {
  constructor(private _authService:AuthService,private _router: Router){}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._authService.userData.getValue()!="") {
        return true;
        
      }else{
        this._router.navigate(["home"])
        return false;
      }
    }
  }
  

