import { Injectable } from '@angular/core';
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:3000/categories');
  }

  public get(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`http://localhost:3000/categories/${id}`);
  }

  public save(category: Category): Observable<Category> {
    if (category.id) {
      return this.httpClient.put<Category>(`http://localhost:3000/categories/${category.id}`, category);
    } else {
      return this.httpClient.post<Category>(`http://localhost:3000/categories`, category);
    }
  }
}
