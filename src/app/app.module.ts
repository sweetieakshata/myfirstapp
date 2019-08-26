import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";



//import { DisplaytaskComponent } from './displaytask/displaytask.component';
//import { AddtaskComponent } from './displaytask/addtask/addtask.component';
//import { EdittaskComponent } from './displaytask/edittask/edittask.component';
//import { SidebartaskComponent } from './sidebartask/sidebartask.component';
import { CustomerComponent } from './customer/customer.component';

import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

import { Interceptordemo } from './interceptordemo';
import { Product1Component } from './product1/product1.component';


import { HomeComponent } from './home/home.component';
import { UserModule } from './userdisplay/user.module';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,




   // DisplaytaskComponent,
   // AddtaskComponent,
    //EdittaskComponent,
    CustomerComponent,

    LoginComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Product1Component,
    UsersComponent,

    HomeComponent,





  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,



  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
