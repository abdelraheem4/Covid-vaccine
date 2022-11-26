import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VaccinesService {
  Vaccine:any=[{}];

  constructor(private http:HttpClient,private spinner :NgxSpinnerService,private toastr:ToastrService) { }
  getall(){
    this.spinner.show();
    this.http.get('https://localhost:5001/api/Vaccines').subscribe((res)=>{
      this.Vaccine=res;
      this.spinner.hide();
      this.toastr.success('Data Retrived successfully');

    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    }
    
    )

  }
}
