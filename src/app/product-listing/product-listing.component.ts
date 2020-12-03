import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) {
    this.productService.getAll().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
  }

}
