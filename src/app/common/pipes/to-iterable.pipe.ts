import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toIterable'
})
export class ToIterablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values= [];
    for (let key in value) {
     values.push(key);
    }
    return values;
  }

}
