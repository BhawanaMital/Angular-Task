import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  public message;
  @Output() public childEVent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  parentForward(value){
    this.childEVent.emit(value);
  }
}
