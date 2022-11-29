import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagevaccinesComponent } from './managevaccines/managevaccines.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { VaccinaiationCenterComponent } from './vaccinaiation-center/vaccinaiation-center.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';

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
    path:'manageHome',
    component:ManageHomeComponent
<<<<<<< HEAD
    
  },
 
=======
  },
>>>>>>> 7012ec42b7115cea8cbfeabbfb7fbe4b97265b99
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
