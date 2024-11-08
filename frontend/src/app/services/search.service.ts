import { Injectable } from '@angular/core';
import { SearchPopupStore } from '../state/store/search-popup.store';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private searchPopupStore: SearchPopupStore) {
  }

  toggleSearchPopup() {
    this.searchPopupStore.update(state => ({
      isSearchPopupVisible: !state.isSearchPopupVisible
    }));
  }
}
