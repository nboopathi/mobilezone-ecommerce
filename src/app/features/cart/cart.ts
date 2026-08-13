import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  increaseQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(
      productId,
      quantity + 1
    );
  }

  decreaseQuantity(productId: number, quantity: number): void {
    if (quantity > 1) {
      this.cartService.updateQuantity(
        productId,
        quantity - 1
      );
    }
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  proceedToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  continueShopping(): void {
    this.router.navigate(['/']);
  }

}