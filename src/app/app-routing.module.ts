import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { DoctorModule } from './doctor/doctor.module';
import { HomeComponent } from './home/home.component';
import { PreventionComponent } from './prevention/prevention.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { AuthModule } from './auth/auth.module';
import { ErrorComponent } from './shared/error/error.component';
import { AuthorizationGuard } from './authorization.guard';
import { CentersComponent } from './centers/centers.component';

const routes: Routes = [ 
  {
    path:'',
    component:HomeComponent
  },
{
  path:'prevention',
  component:PreventionComponent
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
  loadChildren:()=>AdminModule,
  canActivate:[AuthorizationGuard]

},
{
  path:'managedoctor',
  loadChildren:()=>DoctorModule
},
{
  path:'security',
  loadChildren:()=>AuthModule
},
{
  path:'centers',
  component:CentersComponent

},
{
  path:'**',
  component:ErrorComponent

},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
