import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagevaccinesComponent } from './managevaccines/managevaccines.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { VaccinaiationCenterComponent } from './vaccinaiation-center/vaccinaiation-center.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path:'',
    component:SidebarComponent
  },
  {
    path:'user',
    component:ManageUserComponent
  },
  {
    path:'vaccine',
    component:ManagevaccinesComponent
  },
  {
    path:'testmonial',
    component:TestmonialComponent
  },

  {
    path:'vaccinaiationcenter',
    component:VaccinaiationCenterComponent
  },
  {
    path:'testmonial',
    component:TestmonialComponent
  },
  {
    path:'vaccinaiationcenter',
    component:VaccinaiationCenterComponent
  },
  {
    path:'doctor',
    component:DoctorComponent
  },
  {
    path:'manageHome',
    component:ManageHomeComponent
    
  },
  {
    path:'managereservation',
    component:ReservationComponent
    
  },
  {
    path:'tables',
    component:TablesComponent
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
