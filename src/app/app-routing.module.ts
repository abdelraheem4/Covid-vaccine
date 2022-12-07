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
<<<<<<< HEAD
import { MapMarkerClusterer } from '@angular/google-maps';
=======
import { CentersComponent } from './centers/centers.component';
//import { GoogleMapsComponent } from './google-maps/google-maps.component';
//import { MapMarkerComponent } from './map-marker/map-marker.component';
//import { MapWindowComponent } from './map-window/map-window.component';
>>>>>>> 1b36fc139cc87d884777949bd32c58962f4c4391

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
<<<<<<< HEAD
 //canActivate:[AuthorizationGuard]
=======
  //  canActivate:[AuthorizationGuard]
>>>>>>> 1b36fc139cc87d884777949bd32c58962f4c4391

},
{
  path:'managedoctor',
  loadChildren:()=>DoctorModule
},


<<<<<<< HEAD


=======
>>>>>>> 1b36fc139cc87d884777949bd32c58962f4c4391
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
