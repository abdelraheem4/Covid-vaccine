import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PreventionComponent } from './prevention/prevention.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { AdminModule } from './admin/admin.module';
<<<<<<< HEAD
import { NewDashComponent } from './admin/new-dash/new-dash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { AuthModule } from './auth/auth.module';

>>>>>>> 7012ec42b7115cea8cbfeabbfb7fbe4b97265b99


const routes: Routes = [ { 
  path:'prevention',
  component:PreventionComponent
},
{
  path:'',
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
<<<<<<< HEAD
  path:'dash',
  component:DashboardComponent
},



// {
//   path:'security',
//   loadChildren:()=>AuthModule
// },
=======
  path:'security',
  loadChildren:()=>AuthModule
},
>>>>>>> 7012ec42b7115cea8cbfeabbfb7fbe4b97265b99


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
