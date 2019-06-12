import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toIterableByKey'
})
export class ToIterableByKeyPipe implements PipeTransform {

  transform(value ) {
    let values= [];
    for (let key in value) {
     values.push(key);
    }
    return values;
  }

}

