import { Injectable } from '@angular/core';
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  public add(category: Category): void {
    this.categories.push(category);
  }

  public getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:3000/categories');
  }
}
