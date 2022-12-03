import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { DoctorModule } from './doctor/doctor.module';
import { HomeComponent } from './home/home.component';
import { PreventionComponent } from './prevention/prevention.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [ { 
  path:'prevention',
  component:PreventionComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'symptoms',
  component:SymptomsComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'admin',
  loadChildren:()=>AdminModule
},
{
  path:'managedoctor',
  loadChildren:()=>DoctorModule
},





// {
//   path:'security',
//   loadChildren:()=>AuthModule
// },
{
  path:'security',
  loadChildren:()=>AuthModule
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
