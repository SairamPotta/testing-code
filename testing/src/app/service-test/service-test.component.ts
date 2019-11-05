import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.css']
})
export class ServiceTestComponent implements OnInit {
  todosInfo: any[];
  error: string;
  constructor(private _service: SharedService) {}

  ngOnInit() {
    this._service.getTodos().subscribe((response: any[]) => {
      this.todosInfo = response;
    }, (error) => {
      console.log(error);
      this.error =  error;
    });
  }
}
