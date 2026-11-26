import { Routes } from '@angular/router';
import { ShopPage } from './features/shop/shop-page/shop-page';
import { CartPage } from './features/cart/cart-page/cart-page';
import { ProductDetailPage } from './features/shop/product-detail-page/product-detail-page';
import { CheckoutPage } from './features/checkout/checkout-page/checkout-page';
import { HomePage } from './features/home/home-page/home-page';
import { ImprintPage } from './features/legal/imprint-page/imprint-page';
import { PrivacyPage } from './features/legal/privacy-page/privacy-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'shop', component: ShopPage },
  { path: 'warenkorb', component: CartPage },
  { path: 'produkt/:id', component: ProductDetailPage },
  { path: 'kasse', component: CheckoutPage },
  { path: 'impressum', component: ImprintPage },
  { path: 'datenschutz', component: PrivacyPage },
];
