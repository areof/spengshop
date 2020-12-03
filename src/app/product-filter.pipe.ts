import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './model/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(values: Product[], filter: any): Product[] {
    return values.filter(product => {
      return product.name.indexOf(filter) !== -1;
    });
  }
}
