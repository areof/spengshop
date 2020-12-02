import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.route.params.subscribe(params => {
    });
  }

  ngOnInit(): void {
  }

}
