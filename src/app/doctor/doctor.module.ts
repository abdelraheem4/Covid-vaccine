import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import {MatDialogModule} from '@angular/material/dialog';

import { SharedModule } from '../shared/shared.module';
import { ManageVaccineComponent } from './manage-vaccine/manage-vaccine.component';
import { AcceptComponent } from './accept/accept.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
   
  
    
  
    ManageVaccineComponent,
                   AcceptComponent,
                   SidebarComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    MatDialogModule
  ]
})
export class DoctorModule { }
