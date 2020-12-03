import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {switchMap} from "rxjs/operators";
import {Product} from "../model/product";
import {Category} from "../model/category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.activatedRoute.params.pipe(
      switchMap(params => productService.get(params.id))
    ).subscribe((product) => {
      this.product = product;
    });
  }

  ngOnInit(): void {
  }

  saveForm(product: Product): void {
    this.productService.save({ ...this.product, ...product }).subscribe(obj => {
      this.router.navigate(['product-listing']);
    });
  }

}
