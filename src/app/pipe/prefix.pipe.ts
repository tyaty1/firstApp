import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: any, pre: string = 'Ms.'): any {
    return `${pre} ${value}`;
  }

}
