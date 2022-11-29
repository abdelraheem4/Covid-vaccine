import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-manage-vaccine',
  templateUrl: './manage-vaccine.component.html',
  styleUrls: ['./manage-vaccine.component.css']
})
export class ManageVaccineComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any> 
  @ViewChild('callDeleteDailog') callDeleteDailog!:TemplateRef<any> 
  num:number=0;
  constructor(private router:Router,public user:UserService,private dialog:MatDialog) { }


  updateForm:FormGroup= new FormGroup({
    userid:new FormControl(),
    fullname:new FormControl(),
    username:new FormControl(),
    image:new FormControl(),
    phonenumber:new FormControl(),
    age:new FormControl(),
    numberofvaccines:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    roleid:new FormControl()
  })
  ngOnInit(): void {
    this.user.getALLUser();
  }


  p_data :any={};
  openUpdateDailog(obj:any)
  {
    this.p_data={
      userid:obj.userid,
      fullname:obj.fullname,
      username:obj.username,
     
      phonenumber:obj.phonenumber,
      age:obj.age,
      numberofvaccines:obj.numberofvaccines,
      email:obj.email,
      password:obj.password,
      roleid:obj.roleid,
      image:obj.image,


  }
  this.updateForm.controls['userid'].setValue(this.p_data.userid);
  this.updateForm.controls['fullname'].setValue(this.p_data.fullname);
  this.updateForm.controls['username'].setValue(this.p_data.username);
  this.updateForm.controls['phonenumber'].setValue(this.p_data.phonenumber);
  this.updateForm.controls['age'].setValue(this.p_data.age);
  this.updateForm.controls['email'].setValue(this.p_data.email);
  this.updateForm.controls['roleid'].setValue(this.p_data.roleid);
  this.updateForm.controls['password'].setValue(this.p_data.password);
  this.updateForm.controls['image'].setValue(this.p_data.image);

  this.dialog.open(this.callUpdateDailog);
  }


  
  savedata()
  {
    debugger
    this.user.updateUser(this.updateForm.value);
  }

  openDeleteDailog(id:number)
  {
    const dialogRef=this.dialog.open(this.callDeleteDailog);
     dialogRef.afterClosed().subscribe((result)=>{
       if(result!=undefined)
      {
        if(result=='yes')
       { debugger
         this.user.deleteUser(id);
       }
        else if (result=='no')
         console.log('thank you')
      }
     })
  }

  searchInput(ev:any){
    this.num=ev.target.value;
  }
  Search(){
    debugger
    this.user.srarchByid(this.num);
  }
}
