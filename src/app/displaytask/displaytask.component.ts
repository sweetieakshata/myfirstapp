import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { Router } from '@angular/router';
import { TaskdataService } from './taskdata.service';



@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css']
})
export class DisplaytaskComponent implements OnInit {
arr1:Task[] = [];
name:string="ScaechTask";
  constructor(private data:TaskdataService,private _router:Router) { }

  ngOnInit() {
    this.data.getAllTask().subscribe(
      (data:Task[])=>{
        this.arr1=data;
        console.log(Task);
      }
    );
  }
onTaskDelete(item:Task){
  this.data.deleteTask(item.Id).subscribe(
    (data:any)=>{
      this.arr1.splice(this.arr1.indexOf(item),1);
      alert('deleted');
    }
  );
}
onTaskEdit(item:Task){
  this._router.navigate(['/edittask',item.Id]);
}
onSideBarClick(value) {
  if (value != "") {
    this.arr1 = this.arr1.filter(x => x.Id.indexOf(value) != -1);
  } else {
    this.data.getAllTask().subscribe(
      (data: Task[]) => {
        this.arr1 = data;
      },
      function(error) {
        alert(error);
      },
      function() {}
    );
  }
}
}
