import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-test',
  templateUrl: './output-test.component.html',
  styleUrls: ['./output-test.component.css']
})
export class OutputTestComponent implements OnInit {

  @Output() emitData: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  sendData() {
    this.emitData.emit('Emitting data to parent');
  }

}
