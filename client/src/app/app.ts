import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './features/shop/product-card/product-card';
import { Product } from './shared/models/product';

@Component({
  imports: [RouterOutlet, ProductCard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('client');
  protected readonly vase: Product = {
    id: '08',
    name: 'Vase geriffelt',
    price: 10,
    imageUrl: '/images/products/raysin-einzelteile/8-vase-geriffelt.webp',
  };
  protected readonly lighthouse: Product = {
    id: '01',
    name: 'Leuchthaus',
    price: 21,
    imageUrl: '/images/products/raysin-einzelteile/1a-leuchthaus.webp',
  };
  protected readonly longVase: Product = {
    id: '09',
    name: 'Vase lang',
    price: 17,
    imageUrl: '/images/products/raysin-einzelteile/9-vase-lang.webp',
  };
}
