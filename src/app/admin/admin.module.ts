import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
<<<<<<< HEAD
import { ManagevaccinesComponent } from './managevaccines/managevaccines.component';
<<<<<<< HEAD
=======
import { TestmonialComponent } from './testmonial/testmonial.component';
import { VaccinaiationCenterComponent } from './vaccinaiation-center/vaccinaiation-center.component';
>>>>>>> fe159490f59683abd97ed800c8cdc3f9bfdd50e3
=======
import { TestmonialComponent } from './testmonial/testmonial.component';
import { VaccinaiationCenterComponent } from './vaccinaiation-center/vaccinaiation-center.component';
>>>>>>> 1b8b485d881bb1a7c9ab53cf83a6763fd22230b0


@NgModule({
  declarations: [
<<<<<<< HEAD
SidebarComponent,
ManageUserComponent,
<<<<<<< HEAD
ManagevaccinesComponent
=======
=======
ManagevaccinesComponent,
>>>>>>> 1b8b485d881bb1a7c9ab53cf83a6763fd22230b0
    SidebarComponent,
    ManageUserComponent,
    TestmonialComponent,
    VaccinaiationCenterComponent
<<<<<<< HEAD
>>>>>>> fe159490f59683abd97ed800c8cdc3f9bfdd50e3
=======
>>>>>>> 1b8b485d881bb1a7c9ab53cf83a6763fd22230b0
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
