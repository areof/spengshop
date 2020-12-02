import { Injectable } from '@angular/core';
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [];

  constructor() { }

  public add(category: Category): void {
    this.categories.push(category);
  }

  public getAll(): Category[] {
    return this.categories;
  }
}
