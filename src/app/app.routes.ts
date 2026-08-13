import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProductDetails } from './features/product-details/product-details';
import { Cart } from './features/cart/cart';
import { Checkout } from './features/checkout/checkout';
import { OrderSuccess } from './features/order-success/order-success';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'product/:id',
        component: ProductDetails
    },
    {
        path: 'cart',
        component: Cart
    },
    {
        path: 'checkout',
        component: Checkout
    },
    {
        path: 'order-success',
        component: OrderSuccess
    }
];
