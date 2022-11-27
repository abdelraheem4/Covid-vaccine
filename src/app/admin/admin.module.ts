import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagevaccinesComponent } from './vaccine/managevaccines/managevaccines.component';
import { VaccinaiationCenterComponent } from './vaccinaiation-center/vaccinaiation-center.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
<<<<<<< HEAD
import { CreateUserComponent } from './create-user/create-user.component';
=======
import { CreatevaccineComponent } from './vaccine/createvaccine/createvaccine.component';
>>>>>>> 22af89189d110e0b349957e73fcc66aee775ea3c


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
<<<<<<< HEAD
    CreateUserComponent
=======
    CreatevaccineComponent
>>>>>>> 22af89189d110e0b349957e73fcc66aee775ea3c
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
