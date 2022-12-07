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
import { MapMarkerClusterer } from '@angular/google-maps';
import { CentersComponent } from './centers/centers.component';
//import { GoogleMapsComponent } from './google-maps/google-maps.component';
//import { MapMarkerComponent } from './map-marker/map-marker.component';
//import { MapWindowComponent } from './map-window/map-window.component';

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
 //canActivate:[AuthorizationGuard]

},
{
  path:'managedoctor',
  loadChildren:()=>DoctorModule
},





// {
// path:'map',
// component:GoogleMapsComponent
// },
// {
// path:'maeker',
// component:MapMarkerComponent
// },
// {
// path:'info',
// component:MapWindowComponent
// },

{
  path:'security',
  loadChildren:()=>AuthModule
},
// {
//   path:'access',
//   loadChildren:()=>AccessModule 
// },
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
