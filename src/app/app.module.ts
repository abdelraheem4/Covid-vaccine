import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PreventionComponent } from './prevention/prevention.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { AboutComponent } from './about/about.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from 'src/Interceptor/token.Interceptor';
import { CentersComponent } from './centers/centers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreventionComponent,
    SymptomsComponent,
    AboutComponent,
<<<<<<< HEAD
    CentersComponent,
  
=======
   
    CentersComponent,
  
  
>>>>>>> 4441825b3685ed5bb034e4e2da09cf2afddabf1b

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule,
    SharedModule, 
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
  
=======

  
    //GoogleMapsModule
>>>>>>> 4441825b3685ed5bb034e4e2da09cf2afddabf1b
],
exports: [],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
