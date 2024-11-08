import { Component } from '@angular/core';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductGridComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
}
