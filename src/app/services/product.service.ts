import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  public get(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }

  public save(product: Product): Observable<Product> {
    if (product.id) {
      return this.httpClient.put<Product>(`http://localhost:3000/products/${product.id}`, product);
    } else {
      return this.httpClient.post<Product>(`http://localhost:3000/products`, product);
    }
  }
}
