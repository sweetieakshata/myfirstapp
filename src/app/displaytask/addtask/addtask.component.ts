import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private data: TaskdataService) { }

  ngOnInit() {
  }
onTaskAdd(f) {
  this.data.AddTask(f.value).subscribe((data: any) => {
    alert("record added");
  });
}
}
