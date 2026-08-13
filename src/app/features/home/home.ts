import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  constructor(private router: Router) {}

  viewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }

  categories = [
    {
      name: 'Mobile Cases',
      image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=400'
    },
    {
      name: 'Chargers',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400'
    },
    {
      name: 'Cables',
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400'
    },
    {
      name: 'Earbuds',
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400'
    },
    {
      name: 'Power Banks',
      image: 'https://images.unsplash.com/photo-1609592424824-8b51c159ad1d?w=400'
    },
    {
      name: 'Smart Watches',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'
    }
  ];

  products = [
  {
    id: 1,
    name: 'Premium Shockproof Mobile Case',
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=500',
    price: 499,
    originalPrice: 799,
    discount: 38,
    rating: 4.5
  },
  {
    id: 2,
    name: 'Fast Charging Adapter 20W',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500',
    price: 699,
    originalPrice: 999,
    discount: 30,
    rating: 4.4
  },
  {
    id: 3,
    name: 'Type-C Fast Charging Cable',
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
    price: 299,
    originalPrice: 499,
    discount: 40,
    rating: 4.6
  },
  {
    id: 4,
    name: 'Wireless Bluetooth Earbuds',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.7
  }
];

}
