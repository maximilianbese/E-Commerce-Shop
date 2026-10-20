import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { PRODUCTS } from '../../../shared/data/products.data';

@Component({
  imports: [ProductCard],
  selector: 'app-shop-page',
  styleUrl: './shop-page.scss',
  templateUrl: './shop-page.html',
})
export class ShopPage {
  protected readonly products = PRODUCTS;
}
