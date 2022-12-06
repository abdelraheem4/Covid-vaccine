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

<<<<<<< HEAD
  constructor(private spinner:NgxSpinnerService,private route:Router,public auth:AuthService) { }
  username:FormControl = new FormControl('' ,[Validators.required ]);
  password:FormControl = new FormControl('' ,[Validators.required , Validators.minLength(8)]);
=======
  constructor(private spinner:NgxSpinnerService,public home:HomeService, private route:Router,public auth:AuthService) { }
  username = new FormControl('' ,[Validators.required ]);
  password = new FormControl('' ,[Validators.required , Validators.minLength(8)]);
>>>>>>> fd181e97a6fe964a2028f4fc08696f5026a77eb0
  
  ngOnInit(): void {
  }
 
  submit(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },3000);
    
     this.auth.submit(this.username,this.password);
   }
   goToregister(){
    this.route.navigate(['security/register'])
  }
}
