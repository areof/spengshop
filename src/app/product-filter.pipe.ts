import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './model/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(values: Product[], filter: string): Product[] {
    return values.filter(product => {
      return product.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        (product.artNo + '').indexOf(filter.toLowerCase()) !== -1;
    });
  }
}
