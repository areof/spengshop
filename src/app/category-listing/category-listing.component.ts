import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Category} from "../model/category";

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) {
    this.categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {
  }

}
