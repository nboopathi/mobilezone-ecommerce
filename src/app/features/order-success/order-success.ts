import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  imports: [CommonModule],
  templateUrl: './order-success.html',
  styleUrl: './order-success.scss'
})
export class OrderSuccess implements OnInit {

  order: any;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {

    const savedOrder = sessionStorage.getItem('latestOrder');

    if (savedOrder) {
      this.order = JSON.parse(savedOrder);
    } else {
      this.router.navigate(['/']);
    }

  }

  continueShopping(): void {
    this.router.navigate(['/']);
  }

}