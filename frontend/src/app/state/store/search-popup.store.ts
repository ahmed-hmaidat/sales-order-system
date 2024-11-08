import { Store, StoreConfig } from '@datorama/akita';
import { SearchPopupState } from "../../models/search-popup-state.model";

export function createInitialState(): SearchPopupState {
  return {
    isSearchPopupVisible: false,
    searchQuery: ''
  };
}

@StoreConfig({ name: 'search-popup' })
export class SearchPopupStore extends Store<SearchPopupState> {
  constructor() {
    super(createInitialState());
  }

  updateSearchQuery(query: string) {
    this.update({ searchQuery: query });
  }
}
