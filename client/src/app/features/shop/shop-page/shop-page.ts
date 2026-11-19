import { Component, signal, computed } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { PRODUCTS } from '../../../shared/data/products.data';
import { Category } from '../../../shared/models/category';

@Component({
  imports: [ProductCard],
  selector: 'app-shop-page',
  styleUrl: './shop-page.scss',
  templateUrl: './shop-page.html',
})
export class ShopPage {
  protected readonly selectedCategory = signal<Category | null>(null);

  protected readonly visibleProducts = computed(() => {
    const category = this.selectedCategory();
    return category ? PRODUCTS.filter((product) => product.category === category) : PRODUCTS;
  });
}
