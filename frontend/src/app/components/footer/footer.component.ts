import { Component } from '@angular/core';
import { MenuService } from "../../services/menu.service";
import { MenuItem } from "../../models/menu-item.model";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})

export class FooterComponent {
  menuItems: MenuItem[] = [];
  mainLogoPath: string = 'assets/images/logo.png';
  dhlLogoPath: string = 'assets/images/dhl.png';
  careemLogoPath: string = 'assets/images/careem-delivery.png';
  visaLogoPath: string = 'assets/images/visa.jpg';
  mastercardLogoPath: string = 'assets/images/mastercard.jpg';
  paypalLogoPath: string = 'assets/images/paypal.jpg';

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
  }
}
