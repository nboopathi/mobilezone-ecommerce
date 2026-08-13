import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  productId!: number;

  quantity = 1;
  selectedImage = '';

  products = [
    {
      id: 1,
      name: 'Premium Shockproof Mobile Case',
      price: 499,
      originalPrice: 799,
      discount: 38,
      rating: 4.5,
      reviews: 128,
      description:
        'Premium shockproof mobile case designed to protect your phone from everyday drops and scratches.',
      images: [
        'https://images.unsplash.com/photo-1601593346740-925612772716?w=800',
        'https://images.unsplash.com/photo-1601593346740-925612772716?w=900'
      ]
    },
    {
      id: 2,
      name: 'Fast Charging Adapter 20W',
      price: 699,
      originalPrice: 999,
      discount: 30,
      rating: 4.4,
      reviews: 86,
      description:
        'High speed 20W charging adapter with safe and efficient charging technology.',
      images: [
        'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800',
        'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=900'
      ]
    },
    {
      id: 3,
      name: 'Type-C Fast Charging Cable',
      price: 299,
      originalPrice: 499,
      discount: 40,
      rating: 4.6,
      reviews: 214,
      description:
        'Durable Type-C fast charging cable with high-speed data transfer and strong braided protection.',
      images: [
        'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800',
        'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=900'
      ]
    },
    {
      id: 4,
      name: 'Wireless Bluetooth Earbuds',
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      rating: 4.7,
      reviews: 342,
      description:
        'Premium wireless Bluetooth earbuds with immersive sound and long-lasting battery life.',
      images: [
        'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800',
        'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=900'
      ]
    }
  ];

  product: any;

  addToCart(): void {

    this.cartService.addToCart(
      this.product,
      this.quantity
    );
  }

  buyNow(): void {
    this.addToCart();
    this.router.navigate(['/checkout']);
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.productId = Number(params.get('id'));

      this.product = this.products.find(
        product => product.id === this.productId
      );

      if (this.product) {
        this.selectedImage = this.product.images[0];
      }

    });

  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}