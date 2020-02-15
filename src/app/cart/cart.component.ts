import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuider: FormBuilder
  ) {

    this.checkoutForm = this.formBuider.group({
      name: '',
      address: ''
    })

  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset(); // Resata os dados do formulário

    console.warn('Your order has been submitted', customerData);
  }

}