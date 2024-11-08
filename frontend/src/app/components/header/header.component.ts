import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, FormsModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  searchQuery = '';
  cartItemCount = 0;

  onSearch() {
    console.log('Searching for:', this.searchQuery);
    // Implement search functionality
  }
}
