import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {
  }

  getProducts(searchQuery: string = ''): Observable<Product[]> {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.set('filter[name]', searchQuery);
    }
    return this.http.get<Product[]>(this.apiUrl, { params });
  }
}
