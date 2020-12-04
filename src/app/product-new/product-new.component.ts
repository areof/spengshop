import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveForm(product: Product): void {
    this.productService.save(product).subscribe(() => {
      this.router.navigate(['admin', 'product-listing']);
    });
  }
}
