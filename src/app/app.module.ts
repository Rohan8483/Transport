import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule,Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirective } from './highlight.directive';
import { ServiceComponent } from './service/service.component';
import {MyguardGuard} from './myguard.guard';
import {ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoService} from './demo.service';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';

  const xyz:Routes=[{path:"home" ,component:HomeComponent},
                      {path:"About us" ,component:AboutusComponent},
                        {path:"Login" , component:LoginComponent},
                        {path:"admin" , component:AdminComponent},
                        {path:"Rgistration" , component:RegistrationComponent},
                        {path:"Service" , component:ServiceComponent},
                        {path:"logout" , component:LogoutComponent},
                        {path:"" , redirectTo:"/home" , pathMatch:"full"},
                        {path:"**" , component:PageNotFoundComponent}]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    HighlightDirective,
    ServiceComponent,
    AdminComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(xyz),ReactiveFormsModule,MaterialModule, 
    BrowserAnimationsModule,HttpClientModule
  ],
  providers: [MyguardGuard,DemoService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
