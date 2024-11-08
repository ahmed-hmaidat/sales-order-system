import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item.model';
import { SearchService } from "../../services/search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  menuItems: MenuItem[] = [];

  logoPath: string = 'assets/images/logo.png';

  constructor(private searchService: SearchService, private menuService: MenuService) {
  }

  toggleSearchPopup() {
    this.searchService.toggleSearchPopup();
  }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
  }
}
