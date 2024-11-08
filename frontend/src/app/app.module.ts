import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { MatIconModule } from "@angular/material/icon";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { SwiperModule } from 'swiper/angular';
import { ProductGridComponent } from "./components/product-grid/product-grid.component";
import { ProductsComponent } from "./pages/products/products.component";
import { PopperDirective } from './popper.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from "./components/search/search.component";
import { SearchService } from "./services/search.service";
import { SearchPopupStore } from "./state/store/search-popup.store";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductGridComponent,
    ProductsComponent,
    PopperDirective,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    SwiperModule,
    NgbModule
  ],
  providers: [
    SearchPopupStore,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
