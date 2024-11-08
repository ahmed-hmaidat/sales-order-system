import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { SearchPopupQuery } from "../../state/query/search-popup.query";

@Component({
  selector: 'search-popup',
  templateUrl: './search.component.html',
})

export class SearchComponent {
  searchQuery: string = '';
  isSearchPopupVisible$ = this.searchPopupQuery.isSearchPopupVisible$;

  constructor(
    private searchService: SearchService,
    private searchPopupQuery: SearchPopupQuery,
    private router: Router
  ) {
  }

  closePopup() {
    this.searchService.toggleSearchPopup();
  }

  onSearchSubmit() {
    this.closePopup();
    this.router.navigate(['/products'], { queryParams: { q: this.searchQuery } });
  }
}
