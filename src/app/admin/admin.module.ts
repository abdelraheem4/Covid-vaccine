import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
<<<<<<< HEAD
import { ManagevaccinesComponent } from './managevaccines/managevaccines.component';
=======
import { TestmonialComponent } from './testmonial/testmonial.component';
import { VaccinaiationCenterComponent } from './vaccinaiation-center/vaccinaiation-center.component';
>>>>>>> fe159490f59683abd97ed800c8cdc3f9bfdd50e3


@NgModule({
  declarations: [
<<<<<<< HEAD
SidebarComponent,
ManageUserComponent,
ManagevaccinesComponent
=======
    SidebarComponent,
    ManageUserComponent,
    TestmonialComponent,
    VaccinaiationCenterComponent
>>>>>>> fe159490f59683abd97ed800c8cdc3f9bfdd50e3
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
