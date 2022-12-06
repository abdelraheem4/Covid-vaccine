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
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { MapMarkerClusterer } from '@angular/google-maps';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapWindowComponent } from './map-window/map-window.component';
import { AccessModule } from './access/access.module';

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
  // canActivate:[AuthorizationGuard]

},
{
  path:'managedoctor',
  loadChildren:()=>DoctorModule
},
<<<<<<< HEAD

{
path:'map',
component:GoogleMapsComponent
},
{
path:'maeker',
component:MapMarkerComponent
},
{
path:'info',
component:MapWindowComponent
},

=======
>>>>>>> fd181e97a6fe964a2028f4fc08696f5026a77eb0
{
  path:'security',
  loadChildren:()=>AuthModule
},
// {
//   path:'access',
//   loadChildren:()=>AccessModule 
// },
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
