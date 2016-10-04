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

  transform(value: IProduct[], args: string[]): IProduct[] {
    // let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    let filter: string = args.toString().toLocaleLowerCase();
    return filter ? value.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
  }
}
