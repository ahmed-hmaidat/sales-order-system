import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProductGridComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
}
