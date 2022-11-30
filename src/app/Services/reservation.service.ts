import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservation:any=[{}];

  constructor(private http:HttpClient,private spinner :NgxSpinnerService,private toastr:ToastrService) { }
  getall(){
    this.spinner.show();
    this.http.get('https://localhost:5001/api/Reservation').subscribe((res)=>{
      this.reservation=res;
      this.spinner.hide();
      this.toastr.success('Data Retrived successfully');

    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    }
    
    )

  }
  createreservation(body:any){
this.spinner
this.http.post('https://localhost:5001/api/Reservation',body).subscribe((resp)=>{
  this.spinner.hide();
  this.toastr.success('saved successfully');
},err=>{
  this.spinner.hide();
  this.toastr.error(err.message, err.status);
}
)
  }

  Updatereservation(body:any){
    this.spinner
    this.http.put('https://localhost:5001/api/Reservation',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toastr.success('Update successfully');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    }
    )
      }

      deletereservation(id:number){
        this.spinner.show();
        this.http.delete('https://localhost:5001/api/Reservation/' + id).subscribe((resp)=>{
          this.spinner.hide();
          this.toastr.success('deletd successfully');
        },err=>{
          this.spinner.hide();
          this.toastr.error(err.message, err.status);
        
      
    })
  }
}
  

