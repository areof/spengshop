import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artNo'
})
export class ArtNoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return Math.floor(value / 1000)
      + '.' + value % 1000;
  }

}
