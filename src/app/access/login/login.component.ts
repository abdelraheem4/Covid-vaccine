import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/Services/auth.service';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,public home:HomeService ) { }
  username:FormControl = new FormControl('' ,[Validators.required ]);
  password:FormControl = new FormControl('' ,[Validators.required , Validators.minLength(8)]);
  
  ngOnInit(): void {
  }
 
  submit(){

    console.log(this.username.value);
    console.log(this.password.value);

    
      this.spinner.show();
     setTimeout(()=>{
      this.spinner.hide();
     },3000);
    
    //  this.auth.submit(this.username,this.password);
   }
   goToregister(){
    // this.route.navigate(['security/register'])
 }
}
