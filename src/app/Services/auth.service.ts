import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';
import jwt_decode from "jwt-decode";
import { Token } from '@angular/compiler';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private home:HomeService,private toster:ToastrService,private http:HttpClient,private router:Router ) { }
  submit(email:any , password:any){
   
//     console.log(email.value);
//     console.log(password.value);
// this.toster.success('Logged In Successfully')

          var body={
                     
           email: email.value.toString(),
          password: password.value.toString()
              
          }

          const headerDic={
            'Content-Type':'application/json',
            'Accept':'application/json'
          } 

          const requestOptions={
            headers:new HttpHeaders(headerDic,)
          }

          this.http.post('https://localhost:44352/api/UserAccount',body).subscribe((resp:any)=>{
            const responce={
              token:resp.toString()
            } 
         localStorage.setItem('token',responce.token);
          let data:any =jwt_decode(responce.token);
          localStorage.setItem('user',JSON.stringify({...data}));
          if(data.role==3)
          this.router.navigate(['admin']);
          else if (data.role==2)
          this.router.navigate(['managedoctor/user']);
          else if (data.role==1)
          this.router.navigate(['']);
          
          } ,err=>{ 
          this.toster.error(err.message.err.status);
          })
    
   }
}
