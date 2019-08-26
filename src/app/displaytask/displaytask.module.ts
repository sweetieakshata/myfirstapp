import { NgModule } from "@angular/core";
import { DisplaytaskComponent } from './displaytask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  taskdisplayrouting } from './displaytask.routing';
import { SidebartaskComponent } from '../sidebartask/sidebartask.component';






@NgModule({
  declarations: [
    DisplaytaskComponent,
    AddtaskComponent,
    EdittaskComponent,
    SidebartaskComponent

  ],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,taskdisplayrouting]
})
export class DisplaytaskModule{}
