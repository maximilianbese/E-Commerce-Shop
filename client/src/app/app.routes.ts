import { Routes } from '@angular/router';
import { ShopPage } from './features/shop/shop-page/shop-page';
import { CartPage } from './features/cart/cart-page/cart-page';
import { ProductDetailPage } from './features/shop/product-detail-page/product-detail-page';

export const routes: Routes = [
  { path: '', component: ShopPage },
  { path: 'warenkorb', component: CartPage },
  { path: 'produkt/:id', component: ProductDetailPage },
];
