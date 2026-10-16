import { Component, input } from '@angular/core';
import { Button } from '../../../shared/ui/button/button';
import { Product } from '../../../shared/models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [Button, CurrencyPipe],
  selector: 'app-product-card',
  styleUrl: './product-card.scss',
  templateUrl: './product-card.html',
})
export class ProductCard {
  readonly product = input.required<Product>();
}
