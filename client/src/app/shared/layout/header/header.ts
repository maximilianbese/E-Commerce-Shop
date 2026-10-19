import { Component } from '@angular/core';
import { Button } from '../../ui/button/button';

@Component({
  imports: [Button],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
