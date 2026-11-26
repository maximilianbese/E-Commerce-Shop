import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../../shared/models/category';

@Component({
  imports: [RouterLink],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {
  protected readonly categories: { label: string; value: Category; imageUrl: string }[] = [
    {
      label: 'Kerzen',
      value: 'kerzen',
      imageUrl: '/images/products/kerzen/stumpfkerze-taufe-kranz.webp',
    },
    {
      label: 'Raysin',
      value: 'raysin',
      imageUrl: '/images/products/raysin-sets/rundes-tablett-kerze-vase-haeuser.webp',
    },
    {
      label: 'Plotter',
      value: 'plotter',
      imageUrl: '/images/products/plotter/tshirts-opa-oma-set.webp',
    },
  ];
}
