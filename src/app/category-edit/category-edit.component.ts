import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../services/category.service';
import {Category} from '../model/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category: Category;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.categoryService.get(params.id).subscribe(category => {
        this.category = category;
      });
    });
  }

  ngOnInit(): void {
  }

  saveForm(category: Category): void {
    this.categoryService.save({ ...this.category, ...category }).subscribe(obj => {
      this.router.navigate(['admin', 'category-listing']);
    });
  }
}
