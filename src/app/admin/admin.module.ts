import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { VaccinaiationCenterComponent } from './vaccinaiation-center/vaccinaiation-center.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatevaccineComponent } from './vaccine/createvaccine/createvaccine.component';
import { ManagevaccinesComponent } from './vaccine/managevaccines/managevaccines.component';


@NgModule({
  declarations: [
SidebarComponent,
ManageUserComponent,
    SidebarComponent,
    ManageUserComponent,
    TestmonialComponent,
    VaccinaiationCenterComponent,
    VaccinaiationCenterComponent,
    CreateUserComponent,
    CreatevaccineComponent,
    ManagevaccinesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
