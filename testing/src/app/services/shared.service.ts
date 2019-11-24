import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  endPoint = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private _http: HttpClient) { }

  getTodos() {
    return this._http.get(this.endPoint + '/1');
  }
}
