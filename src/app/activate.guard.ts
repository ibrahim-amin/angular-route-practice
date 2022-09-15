import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class ActivateGuard implements CanActivate {
  constructor(private userservice:UserService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 

      if(this.userservice.isAdminRights()){
     
        return true;
      }
      alert("you don't have permission");
      this.router.navigate(['home']);
      return false;
  }

  
}
