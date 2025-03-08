import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { IProduct } from '../../Service/Product.model';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartList:IProduct[] = []
  constructor(private productService:ProductService){
    this.productService.Cart$.subscribe(item=>{
      this.cartList = item
    })
  }

  get totalPrice(){
    let total:number = 0;
    for(let item of this.cartList){
      total = total + Number(item.PPrice)
    }
    return total
  }
  removeProduct(index:number){
    this.productService.removeFromCart(index);
  }

  OrderAllProduct(item:IProduct[]){
    this.cartList = []
    this.productService.addOrderList(item)
  }
 
}
