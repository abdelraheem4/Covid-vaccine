import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageVaccineComponent } from './manage-vaccine/manage-vaccine.component';


const routes: Routes = [
  {
    path:'user',
    component:ManageVaccineComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
