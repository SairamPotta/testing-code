import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTest'
})
export class PipeTestPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    if(!value) return null;
    return value.filter(ele => ele.toLowerCase().indexOf('h'));
  }

}
