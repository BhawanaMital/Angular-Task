import { Component, OnInit, Input} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
 
  constructor() { }

  ngOnInit() {
  }
 
}
