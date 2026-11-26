import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../../shared/services/cart-service';
import { Button } from '../../../shared/ui/button/button';

@Component({
  imports: [ReactiveFormsModule, Button],
  selector: 'app-checkout-page',
  styleUrl: './checkout-page.scss',
  templateUrl: './checkout-page.html',
})
export class CheckoutPage {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    street: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    city: ['', Validators.required],
  });

  private readonly cartService = inject(CartService);
  protected readonly ordered = signal(false);

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.cartService.clear();
    this.form.reset();
    this.ordered.set(true);
  }
}
