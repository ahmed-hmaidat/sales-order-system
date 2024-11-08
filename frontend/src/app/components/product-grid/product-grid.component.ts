import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';
import { switchMap } from 'rxjs/operators';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [];
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams
      .pipe(
        switchMap(params => {
          const searchQuery = params['q'] || '';
          return this.productService.getProducts(searchQuery);
        })
      )
      .subscribe(
        products => this.products = products
      );
  }

  addToCart(product: Product) {
    // dummy card here
    console.log('Added to cart:', product);
  }
}
