import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './shared/ui/button/button';
import { ProductCard } from './features/shop/product-card/product-card';

@Component({
  imports: [RouterOutlet, Button, ProductCard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('client');
}
