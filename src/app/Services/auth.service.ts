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
  
  constructor(private home :HomeService,private toastr:ToastrService,private router:Router,private http:HttpClient) { }
  submit(username:any, password:any)
  {
    var body ={
      username:username.value.toString(),
      password: password.value.toString()
    }
    const headerDic={
      'Content-Type' :'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers: new HttpHeaders(headerDic)
    }
    this.http.post('https://localhost:44352/api/JWT/auth',body,requestOptions).subscribe((resp:any)=>{
      const responce={
        token :resp.toString()
      }
      localStorage.setItem('token',responce.token);
      let data :any=jwt_decode(responce.token);
      localStorage.setItem('user',JSON.stringify({...data}));
      console.log(data)
      if(data.role==3){
      console.log("succ")
      this.router.navigate(['admin']);}
      else if (data.role==1)
      this.router.navigate(['home/']);
      console.log(data.role)
    },err=>{
      this.toastr.error(err.message,err.status);
    })
  }
}