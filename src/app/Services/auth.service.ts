import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private home:HomeService,private toster:ToastrService  ) { }
  submit(email:any , password:any){
   
    console.log(email.value);
    console.log(password.value);
this.toster.success('Logged In Successfully')
    
   }
}
