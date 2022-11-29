import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService) { }
  email = new FormControl('' ,[Validators.required , Validators.email]);
  password = new FormControl('' ,[Validators.required , Validators.minLength(8)]);
  
  ngOnInit(): void {
  }
  submit(){
    this.spinner.show();
    // this.auth.submit(this.email,this.password);
   }
}
