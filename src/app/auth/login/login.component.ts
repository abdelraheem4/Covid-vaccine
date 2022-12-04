import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';
import { AuthService } from 'src/app/Services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private route:Router,public auth:AuthService) { }
  email = new FormControl('' ,[Validators.required , Validators.email]);
  password = new FormControl('' ,[Validators.required , Validators.minLength(8)]);
  
  ngOnInit(): void {
  }
 
  submit(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },3000);
    
     this.auth.submit(this.email,this.password);
   }
   goToregister(){
    this.route.navigate(['security/register'])
  }
}
