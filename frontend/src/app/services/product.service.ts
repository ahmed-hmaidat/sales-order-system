import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProducts: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://source.unsplash.com/400x300/?headphones'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://source.unsplash.com/400x300/?smartwatch'
    },
    {
      id: 3,
      name: 'Laptop',
      price: 999.99,
      image: 'https://source.unsplash.com/400x300/?laptop'
    },
    {
      id: 4,
      name: 'Smartphone',
      price: 699.99,
      image: 'https://source.unsplash.com/400x300/?smartphone'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts);
  }
}
