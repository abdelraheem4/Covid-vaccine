import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private toastr:ToastrService,private routr:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state);
   const token=localStorage.getItem('token');
   if(token)
{
  if(state.url.indexOf('admin')>=0)
  {
   let user:any=localStorage.getItem('user');
    if(user)
    {
      user=JSON.parse(user);
      if(user.role=='admin'){
        this.toastr.success('Welcome admin ');
        return true;
      }
      else {
        this.toastr.warning('Sorry , this page for admin');
        this.routr.navigate(['security/login']);
        localStorage.clear();
        return false;
      }
   
    }
    else {
      this.toastr.warning('Sorry , this page for teacher');
      this.routr.navigate(['course']);
      return false;
    }

  }

    return true;
}
  
    else 
    {
      this.routr.navigate(['security/login']);
      this.toastr.warning('Please Login');
      return false ;
    }
   
  }
  
}
