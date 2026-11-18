import { Component, computed, input } from '@angular/core';
import { PRODUCTS } from '../../../shared/data/products.data';
import { CurrencyPipe } from '@angular/common';
@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-detail-page',
  styleUrl: './product-detail-page.scss',
  templateUrl: './product-detail-page.html',
})
export class ProductDetailPage {
  readonly id = input.required<string>();

  protected readonly product = computed(() => PRODUCTS.find((product) => product.id === this.id()));
}
