import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../model/product';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  products: Product[] = [];

  filter = '';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
  }
}
