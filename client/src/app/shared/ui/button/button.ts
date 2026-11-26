import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
  host: { '[class.block]': 'fullWidth()' },
})
export class Button {
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly fullWidth = input(false, { transform: booleanAttribute });
}
