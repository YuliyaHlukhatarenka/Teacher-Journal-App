import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toIterableByKey'
})
export class ToIterableByKeyPipe implements PipeTransform {

  public transform(value: object): string[] {
    return Object.keys(value);
  }
}
