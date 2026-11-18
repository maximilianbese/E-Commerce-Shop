import { Component, computed, input } from '@angular/core';
import { PRODUCTS } from '../../../shared/data/products.data';
@Component({
  imports: [],
  selector: 'app-product-detail-page',
  styleUrl: './product-detail-page.scss',
  templateUrl: './product-detail-page.html',
})
export class ProductDetailPage {
  readonly id = input.required<string>();

  protected readonly product = computed(() => PRODUCTS.find((product) => product.id === this.id()));
}
