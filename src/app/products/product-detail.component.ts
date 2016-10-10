import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'product-detail.component.html',
})

export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router){

  }

  pageTitle: string  = 'Product Detail';
  productId: number;

  ngOnInit(): void {
    this._route.params.subscribe(
      (params: any) => {
        let id = +params.id;
        this.productId = id;
      }
    );
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
