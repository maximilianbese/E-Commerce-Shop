import { Component, inject } from '@angular/core';
import { CartService } from '../../../shared/services/cart-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-cart-page',
  styleUrl: './cart-page.scss',
  templateUrl: './cart-page.html',
})
export class CartPage {
  protected readonly cartService = inject(CartService);
}
