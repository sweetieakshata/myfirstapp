import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserdataService } from './userdisplay/userdata.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(private _userdata:UserdataService,private _router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

      return this.isUserLoggedIn(state.url);
  }
  isUserLoggedIn(url:string):boolean{

    if(this._userdata.isLoggedIn){
      return true;
    }
    this._userdata.redirectURL=url;
    this._router.navigate(['/login']);
    return false;
  }
}
