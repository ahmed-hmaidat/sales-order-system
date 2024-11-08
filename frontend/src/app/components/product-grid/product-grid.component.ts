import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-grid.component.html',
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }

  addToCart(product: Product) {
    // Implement add to cart functionality
    console.log('Added to cart:', product);
  }
}
