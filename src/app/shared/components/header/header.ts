import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';


@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  isMobileMenuOpen = false;
  isSearchOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
