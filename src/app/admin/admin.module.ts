import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagevaccinesComponent } from './managevaccines/managevaccines.component';


@NgModule({
  declarations: [
SidebarComponent,
ManageUserComponent,
ManagevaccinesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
  ]
})
export class AdminModule { }
