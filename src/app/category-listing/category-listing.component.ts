import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service';
import {Category} from '../model/category';
import {ProductService} from '../services/product.service';
import {iif, Observable, of, Subject} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private messageService: MessageService
  ) {
    this.loadCategories();
  }

  private loadCategories(): void {
    // selector: (err: any, caught: Observable<T>) => O
    this.categoryService.getAll().pipe(
      catchError(error => {
        this.messageService.pushMessage({
          isError: true,
          message: 'Es trat ein Fehler bei der HTTP-Kommunikation auf.'
        });
        return of<Category[]>([]);
      })
    ).subscribe((categories: Category[]) => {
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
        this.messageService.pushMessage({
          isError: true,
          message: 'Kategorie kann nicht gelöscht werden, da sie Produkte enthält.'
        });
      }
    });
  }
}
