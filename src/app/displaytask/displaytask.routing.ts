import { AddtaskComponent } from './addtask/addtask.component';
import { RouterModule, Routes } from '@angular/router';
import { EdittaskComponent } from './edittask/edittask.component';
import { DisplaytaskComponent } from './displaytask.component';
const arr : Routes=[
  // {path:'', children:[
  {path:'',component:DisplaytaskComponent},
 {path:'edittask/:Id',component:EdittaskComponent},

  {path:'addtask',component:AddtaskComponent}
// ]},

];

export const taskdisplayrouting=RouterModule.forChild(arr);
