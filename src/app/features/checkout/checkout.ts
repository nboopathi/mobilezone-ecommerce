import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class Checkout {

  selectedPayment = 'cod';

  address = {
    name: '',
    mobile: '',
    email: '',
    addressLine: '',
    city: '',
    state: '',
    pincode: ''
  };

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  placeOrder(): void {

    if (
      !this.address.name ||
      !this.address.mobile ||
      !this.address.addressLine ||
      !this.address.city ||
      !this.address.state ||
      !this.address.pincode
    ) {
      alert('Please fill all required address details');
      return;
    }

    if (this.selectedPayment === 'cod') {

      const orderData = {
        orderId: 'MZ' + Date.now(),
        paymentMethod: 'Cash on Delivery',
        amount: this.cartService.getSubtotal(),
        address: { ...this.address },
        items: [...this.cartService.cartItems()]
      };

      sessionStorage.setItem(
        'latestOrder',
        JSON.stringify(orderData)
      );

      this.cartService.clearCart();

      this.router.navigate(['/order-success']);
    }

  }

  goBackToCart(): void {
    this.router.navigate(['/cart']);
  }

}