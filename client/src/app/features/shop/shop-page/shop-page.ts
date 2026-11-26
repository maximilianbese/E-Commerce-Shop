import { Component, computed, inject, input, linkedSignal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Category } from '../../../shared/models/category';
import { Button } from '../../../shared/ui/button/button';
import { ProductService } from '../../../shared/services/product-service';

@Component({
  imports: [ProductCard, Button],
  selector: 'app-shop-page',
  styleUrl: './shop-page.scss',
  templateUrl: './shop-page.html',
})
export class ShopPage {
  private readonly productService = inject(ProductService);
  readonly kategorie = input<Category>();

  protected readonly categories: { label: string; value: Category | null }[] = [
    { label: 'Alle', value: null },
    { label: 'Kerzen', value: 'kerzen' },
    { label: 'Raysin', value: 'raysin' },
    { label: 'Plotter', value: 'plotter' },
  ];

  protected readonly selectedCategory = linkedSignal<Category | null>(
    () => this.kategorie() ?? null,
  );
  protected readonly visibleProducts = computed(() => {
    const products = this.productService.products.value() ?? [];
    const category = this.selectedCategory();
    return category ? products.filter((product) => product.category === category) : products;
  });
}
