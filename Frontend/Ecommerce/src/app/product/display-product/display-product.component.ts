import { Component } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { IProduct } from '../../Service/Product.model';

@Component({
  selector: 'app-display-product',
  standalone: false,
  templateUrl: './display-product.component.html',
  styleUrl: './display-product.component.css'
})
export class DisplayProductComponent {
  ProductList:IProduct [] = [];
  constructor(private productService:ProductService){
    
  }
  ngOnInit(){
    this.productService.Product$.subscribe(List => {
      this.ProductList = List;
      // console.log("This is Product Display Component: ",List);
      
    })
  }

  addToCart(item:IProduct){
    this.productService.addToCart(item);
  }
}
