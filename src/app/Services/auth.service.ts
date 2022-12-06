import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';
import jwt_decode from "jwt-decode";
import { Token } from '@angular/compiler';
import { Route, Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private spinner:NgxSpinnerService ,private home:HomeService,private toster:ToastrService,private http:HttpClient,private router:Router ) { }
  submit(username:any , password:any){
   
    // console.log(email.value);
    // console.log(password.value);

          var body={
                     
          username: username.value.toString(),
          password: password.value.toString()
              
          };

          const headerDic={
            'Content-Type':'application/json',
            'Accept':'application/json'
          };

          const requestOptions={
            headers:new HttpHeaders(headerDic)
          };
          console.log('ahmad');
          this.http.post('https://localhost:44352/api/JWT',body,requestOptions).subscribe((resp:any)=>{
          console.log("hello");
            
            console.log(resp);
            
            const responce={
              token:resp.toString()
            } 
         localStorage.setItem('token',responce.token);
         
          let data:any =jwt_decode(responce.token);

          localStorage.setItem('user',JSON.stringify({...data}));
          
          if(data.Role == '3')
          this.router.navigate(['admin/userVaccineReport']);
          else if (data.Role == '2')
          this.router.navigate(['managedoctor/user']);
          else if (data.Role== '1')
          this.router.navigate(['about/']);
          
          } ,err=>{ 
          this.toster.error(err.message.err.status);
          })
    
   }
}
         
// console.log("hello");


// var body = {
//   username: username.value.toString(),
//   password: password.value.toString()
// }
// const headerDic = {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json'
// }
// const requestOptions = {
//   headers: new HttpHeaders(headerDic)
// }

// this.http.post('https://localhost:44352/api/JWT/', body, requestOptions).subscribe((resp: any) => {
//   const responce = {
//     token: resp.toString()
//   }
//   localStorage.setItem('token', responce.token);
//   let data: any = jwt_decode(responce.token);
//   localStorage.setItem('user', JSON.stringify({ ...data }));
//   if (data.Role == 1) {
//     this.router.navigate(['']);
//   } else if (data.Roleid == 2) {
//     this.router.navigate(['user/sidebarUser']);
//   }
// }, err => {
//   this.toster.error(err.masseage, err.status);
// })

// }}