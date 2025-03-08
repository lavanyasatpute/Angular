import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { IProduct } from '../../Service/Product.model';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orderList : IProduct [] = [];
  constructor(private productService:ProductService){
    this.productService.order$.subscribe(item=>{
      this.orderList = item;
    })
  }

  totalOrderPrice(): number {
    return this.orderList.reduce((total, order) => total + order.PPrice, 0);
  }
}
