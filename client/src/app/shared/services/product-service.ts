import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';
import { Product } from '../models/product';

@Service()
export class ProductService {
  readonly products = httpResource<Product[]>(() => '/data/products.json');
}
