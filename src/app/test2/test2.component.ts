import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @Output() public childEVent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(value){
    this.childEVent.emit(value);
  }
}
