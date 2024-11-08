import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { SearchPopupStore } from '../store/search-popup.store';
import { SearchPopupState } from "../../models/search-popup-state.model";

@Injectable({ providedIn: 'root' })
export class SearchPopupQuery extends Query<SearchPopupState> {
  isSearchPopupVisible$ = this.select(state => state.isSearchPopupVisible);

  constructor(protected override store: SearchPopupStore) {
    super(store);
  }
}
