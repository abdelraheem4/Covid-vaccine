import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor.service';
import { ReservationService } from 'src/app/Services/reservation.service';
@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any> 
  @ViewChild('callDeleteDailog') callDeleteDailog!:TemplateRef<any> 
userReservation: any;
  constructor(private router:Router,public doctor:DoctorService,public reservation:ReservationService,private dialog:MatDialog) { }


  updateForm:FormGroup = new FormGroup ({
    reserveid: new FormControl(),
    actualdatedose1:new FormControl,
    actualdatedose2:new FormControl,
    massage:new FormControl,
    status:new FormControl,

  })
  ngOnInit(): void {
    this.doctor.getALLUserReservation();
    
  }

   
  
  p_data:any={};
  openUpdateDailog(reserveid:any,status:any,massage:any,ActualDateDose1:any,ActualDateDose2:any
    ){
   debugger
    this.p_data={
      
      reserveid:reserveid,
      status:status,
      massage:massage,
     ActualDateDose1:ActualDateDose1,
      ActualDateDose2:ActualDateDose2

     }
    this.updateForm.controls['reserveid'].setValue(this.p_data.reserveid);
    
     this.updateForm.controls['massage'].setValue(this.p_data.massage);
    this.dialog.open(this.callUpdateDailog);
  }
 



  savedata(){
    this.reservation.Updatereservation(this.updateForm.value);

}
}
