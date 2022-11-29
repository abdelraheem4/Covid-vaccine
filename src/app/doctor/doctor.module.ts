import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ManageVaccineComponent } from './manage-vaccine/manage-vaccine.component';


@NgModule({
  declarations: [
   
  
    
  
    ManageVaccineComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule
  ]
})
export class DoctorModule { }
