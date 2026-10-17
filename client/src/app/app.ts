import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './features/shop/product-card/product-card';
import { PRODUCTS } from './shared/data/products.data';

@Component({
  imports: [RouterOutlet, ProductCard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly products = PRODUCTS;
}
