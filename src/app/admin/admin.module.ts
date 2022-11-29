import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { VaccinaiationCenterComponent } from './vaccinaiation-center/vaccinaiation-center.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { CreateUserComponent } from './create-user/create-user.component';
<<<<<<< HEAD
import { CreatevaccineComponent } from './vaccine/createvaccine/createvaccine.component';
import { ManagevaccinesComponent } from './vaccine/managevaccines/managevaccines.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
=======
import { ManagevaccinesComponent } from './managevaccines/managevaccines.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
>>>>>>> de509cf8fe6f4b470aa74c22874620e7f222c9e1


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
<<<<<<< HEAD
    CreatevaccineComponent,
    ManagevaccinesComponent,
    DoctorComponent,
    CreateDoctorComponent
=======
    ManagevaccinesComponent,
    ManageHomeComponent,
>>>>>>> de509cf8fe6f4b470aa74c22874620e7f222c9e1
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class AdminModule { }
