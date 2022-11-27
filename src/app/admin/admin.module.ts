import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagevaccinesComponent } from './vaccine/managevaccines/managevaccines.component';
import { VaccinaiationCenterComponent } from './vaccinaiation-center/vaccinaiation-center.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { CreatevaccineComponent } from './vaccine/createvaccine/createvaccine.component';


@NgModule({
  declarations: [
SidebarComponent,
ManageUserComponent,
ManagevaccinesComponent,
ManagevaccinesComponent,
    SidebarComponent,
    ManageUserComponent,
    TestmonialComponent,
    VaccinaiationCenterComponent,
    CreatevaccineComponent
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
