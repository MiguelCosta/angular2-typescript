import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

/*
 * Filter a list of products
 * Usage:
 *   products | productFilter:valueToFilter
 * Example:
 *   {{ products |  productFilter:valueToFilter}}
*/
@Pipe({ name: 'productFilter' })
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProduct[], filter: string): IProduct[] {
    let filterValue: string = filter.toLocaleLowerCase();
    return filterValue ? value.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterValue) != -1) : value;
  }

}
