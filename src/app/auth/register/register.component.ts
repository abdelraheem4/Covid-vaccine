import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm :FormGroup = new FormGroup({
  firstname : new FormControl('',[Validators.required]),
  lastname : new FormControl('',[Validators.required]),
  email : new FormControl ('',[Validators.required , Validators.email]),
  password : new FormControl ('', [Validators.required , Validators.minLength(8)]),
  confirmPassword: new FormControl ('', [Validators.required , Validators.minLength(8)])
})

  constructor() { }
  submit()
  {
    console.log(this.registerForm.value);
  }
  ngOnInit(): void {
  }
  matchError (){
    if(this.registerForm.controls['password'].value==this.registerForm.controls['confirmPassword'].value)
      this.registerForm.controls['confirmPassword'].setErrors(null);

    else
       this.registerForm.controls['confirmPassword'].setErrors({mismatch:true})
  }
  // goToLogin(){
  //   this.route.navigate(['security/login'])
  // }
}
