import { Injectable, signal } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<CartItem[]>([]);

  addToCart(product: any, quantity: number = 1): void {

    const currentItems = this.cartItems();

    const existingItem = currentItems.find(
      item => item.id === product.id
    );

    if (existingItem) {

      this.cartItems.update(items =>
        items.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity
              }
            : item
        )
      );

    } else {

      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        image: product.images
          ? product.images[0]
          : product.image,
        price: product.price,
        originalPrice: product.originalPrice,
        quantity: quantity
      };

      this.cartItems.update(items => [
        ...items,
        newItem
      ]);

    }

  }


  removeFromCart(productId: number): void {

    this.cartItems.update(items =>
      items.filter(item => item.id !== productId)
    );

  }


  updateQuantity(
    productId: number,
    quantity: number
  ): void {

    if (quantity < 1) {
      return;
    }

    this.cartItems.update(items =>
      items.map(item =>
        item.id === productId
          ? {
              ...item,
              quantity
            }
          : item
      )
    );

  }


  getCartCount(): number {

    return this.cartItems()
      .reduce(
        (total, item) =>
          total + item.quantity,
        0
      );

  }


  getSubtotal(): number {

    return this.cartItems()
      .reduce(
        (total, item) =>
          total + (item.price * item.quantity),
        0
      );

  }


  clearCart(): void {
    this.cartItems.set([]);
  }

}