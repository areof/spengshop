import { Component, OnInit } from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../services/category.service';
import {Router} from '@angular/router';
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  submitForm(category: Category): void {
    this.categoryService.save(category).subscribe(() => {
      this.messageService.pushMessage({
        isError: false,
        message: 'Die Kategorie wurde angelegt'
      });
      this.router.navigate(['category-listing']);
    });
  }
}
