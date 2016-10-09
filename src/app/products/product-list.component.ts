import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductService) {
  }

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = '';
  textLog: string = '';

  products: IProduct[];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // método que corre quando o componente é iniciado
  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(
        produtcs => this.products = produtcs,
        error => this.textLog = <any>error
      );
    console.log("init");
  }

  onRatingClicked(message: string, productName: string): void {
    this.textLog = `${productName}: ${message}`;
  }
}
