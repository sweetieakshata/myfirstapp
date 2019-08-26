import { Routes,RouterModule } from "@angular/router";


//import { DisplaytaskComponent } from './displaytask/displaytask.component';
//import { EdittaskComponent } from './displaytask/edittask/edittask.component';
//import { AddtaskComponent } from './displaytask/addtask/addtask.component';
import { CustomerComponent } from './customer/customer.component';

import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { ProductResolverService } from './product-resolver.service';
import { Product1Component } from './product1/product1.component';
import { UserResolverService } from './user-resolver.service';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const arr : Routes=[
  {path:'',component:HomeComponent},


  //{path:'edittask/:Id',component:EdittaskComponent},
  {path:'user1',resolve:{uData:UserResolverService},component:UsersComponent},
 // {path:'addtask',component:AddtaskComponent},

 {path:'product1',resolve:{pdata:ProductResolverService},component:Product1Component},
  {path:'customer',canActivate:[UserGuardService],component:CustomerComponent},
  {path:'product',loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'displaytask',loadChildren:'./displaytask/displaytask.module#DisplaytaskModule'},
  {path:'demo',component:DemoComponent},
  {path:'demo1/:id',component:Demo1Component},
  {path:'demo2',component:Demo2Component},
   {path:'login',component:LoginComponent},
  //{path:'tasks',component:DisplaytaskComponent}

];

export const routing=RouterModule.forRoot(arr);
