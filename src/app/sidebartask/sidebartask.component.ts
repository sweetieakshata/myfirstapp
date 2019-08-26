import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebartask',
  templateUrl: './sidebartask.component.html',
  styleUrls: ['./sidebartask.component.css']
})
export class SidebartaskComponent implements OnInit {
  @Input()  categoryName:string="";
  @Output() jinal=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSearchTask(searchTerm){
    this.jinal.emit(searchTerm);
}

}

