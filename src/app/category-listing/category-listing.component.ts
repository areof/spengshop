import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service';
import {Category} from '../model/category';
import {ProductService} from '../services/product.service';
import {iif, of, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {
  }

  deleteCategory(id: number): void {
    this.productService.getAll().subscribe(products => {
      if (products.find(product => product.category === id) === undefined) {
        this.categoryService.delete(id).subscribe(() => {
          this.loadCategories();
        });
      } else {
        window.alert('Diese Kategorie kann nicht gelöscht werden.');
      }
    });
  }
}
