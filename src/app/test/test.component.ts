import { Component, OnInit,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Output() public childEVent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEVent.emit('Hey Stakeroute');
  }
}
