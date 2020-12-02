import { Component, OnInit } from '@angular/core';
import {Category} from "../model/category";
import {CategoryService} from "../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitForm(category: Category): void {
    this.categoryService.save(category).subscribe(() => {
      this.router.navigate(['category-listing']);
    });
  }
}
