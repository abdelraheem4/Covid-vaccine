import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagevaccinesComponent } from './managevaccines/managevaccines.component';
import { VaccinaiationCenterComponent } from './vaccinaiation-center/vaccinaiation-center.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
<<<<<<< HEAD
=======
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatevaccineComponent } from './vaccine/createvaccine/createvaccine.component';
>>>>>>> d55d2c99d6dadeeb2b1969fc5b330947e8ad984f


@NgModule({
  declarations: [
SidebarComponent,
ManageUserComponent,
ManagevaccinesComponent,
ManagevaccinesComponent,
    SidebarComponent,
    ManageUserComponent,
    TestmonialComponent,
<<<<<<< HEAD
    VaccinaiationCenterComponent
=======
    VaccinaiationCenterComponent,
    CreateUserComponent,
    CreatevaccineComponent
>>>>>>> d55d2c99d6dadeeb2b1969fc5b330947e8ad984f
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
