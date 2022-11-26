import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  User:any=[{}];
  display_image:any;
  allTestmonial:any[] = [];
  allVacciniationCentre:any[] = [];
  constructor(private http:HttpClient,private spinner :NgxSpinnerService ,private toastr:ToastrService) { }

  getALLUser(){
    
    this.spinner.show();
    this.http.get('https://localhost:44352/api/UserAccount').subscribe((res)=>{
      this.User=res;
      this.spinner.hide();
      this.toastr.success('Data Retrieved!!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
    }
    )
  }
    GetAllTestmonials(){
      this.spinner.show();
      this.http.get('https://localhost:44352/api/testmonial/GetAll').subscribe((resp:any)=>
      {
       this.allTestmonial = resp;
       console.log(this.allTestmonial);
       this.spinner.hide();
       this.toastr.success('All Testmonials');
     },
     err=>
     {
     this.spinner.hide();
     this.toastr.error(err.message, err.status);
     }
   );
   }

   createTestmonial(body:any){
     this.spinner.show();
     this.http.post('https://localhost:44352/api/testmonial/', body).subscribe((resp)=>
     {
     this.spinner.hide();
     this.toastr.success('Created');

     }, err=>
     {
       this.spinner.hide();
       this.toastr.error(err.message, err.status);
     });
   }

   updateTestmonial(body:any){
     this.spinner.show();
     this.http.put('https://localhost:44352/api/testmonial', body).subscribe((resp)=>
     {
       this.spinner.hide();
       this.toastr.success('Updated');
     }, err=>
     {
       this.toastr.error(err.message, err.status);
     })
   }
   deleteTestmonial(id:number){
     this.spinner.show();
     this.http.delete('https://localhost:44352/api/testmonial/Delete/' + id).subscribe((resp)=>
     {
       this.spinner.hide();
       this.toastr.success('Deleted');
     }, err=>
     {
       this.spinner.hide();
       this.toastr.error(err.message, err.status);
     })
   }

   searchByTestmonial(id:number){
     this.spinner.show();
     this.http.get('https://localhost:44352/api/testmonial/GetById/' + id).subscribe((resp:any)=>{
     this.allTestmonial = [resp];
     this.spinner.hide();  
     this.toastr.success('found SucsessFully');
   
     },err=>{
     this.spinner.hide();
     this.toastr.error(err.status, err.message);
     }
     )}

     getAllVacciniationCentre(){
      this.spinner.show();
      this.http.get('https://localhost:44352/api/VaccinationCenter/').subscribe((resp:any)=>
      {
        this.spinner.hide();
        this.allVacciniationCentre = resp;
        this.toastr.success('All Vacciniation Centers');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    createVacciniationCentre(body:any){
      this.spinner.show();
      this.http.post('https://localhost:44352/api/VaccinationCenter/', body).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Created');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }
    updateVacciniationCentre(body:any){
      this.spinner.show();
      this.http.put('https://localhost:44352/api/VaccinationCenter/', body).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Updated');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      });
    }

    deleteVacciniationCentre(id:number){
      this.spinner.show();
      this.http.delete('https://localhost:44352/api/VaccinationCenter/Delete/' + id).subscribe((resp)=>
      {
        this.spinner.hide();
        this.toastr.success('Deleted');
      }, err=>
      {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
    }

    searchByVacciniationCentre(id:number)
    {
      this.spinner.show();
      this.http.get('https://localhost:44352/api/VaccinationCenter/GetById/' + id).subscribe((resp:any)=>
      {
      this.allVacciniationCentre = [resp];
      this.spinner.hide();  
      this.toastr.success('found SucsessFully');
      },err=>
      {
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
      }
      )
    }


  }

