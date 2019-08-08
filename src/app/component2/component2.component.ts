import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }
  @Output() public childEvent=new EventEmitter();
  sendEventToParent(value){
    this.childEvent.emit(value);
  }

  ngOnInit() {
  }

}
