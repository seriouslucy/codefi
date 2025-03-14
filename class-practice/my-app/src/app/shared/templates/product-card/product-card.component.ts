import { Component, input } from '@angular/core';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  data = input<Product>()

 
}
