import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test-component',
  templateUrl: './pipe-test-component.component.html',
  styleUrls: ['./pipe-test-component.component.css']
})
export class PipeTestComponentComponent implements OnInit {

  data = ['ab', 'ac', 'hb'];
  isValidData: boolean;
  constructor() { }

  ngOnInit() {
  }

  isCalledFunction() {
    this.isValidData ? this.getData(true) : this.getData(false);
  }

  getData(validData) {
    return 'getData called function' + validData;
  }

}
