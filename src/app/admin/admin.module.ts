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
import { DoctorComponent } from './doctor/doctor.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManagevaccinesComponent } from './managevaccines/managevaccines.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TablesComponent } from './tables/tables.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { UserVaccineReportComponent } from './user-vaccine-report/user-vaccine-report.component';
=======
import { UpdateProfileComponent } from './update-profile/update-profile.component';
>>>>>>> 1492845cbd16125f400c2d09da0e76b7ead8eb52


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
    DoctorComponent,
    CreateDoctorComponent,
    ManageHomeComponent,
    ManagevaccinesComponent,
    ReservationComponent,
    TablesComponent,
    ManageAboutComponent,
    DashboardComponent,
<<<<<<< HEAD
    UserVaccineReportComponent,
=======
    UpdateProfileComponent,
>>>>>>> 1492845cbd16125f400c2d09da0e76b7ead8eb52
    
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
    MatFormFieldModule,
    
  ]
})
export class AdminModule { }
