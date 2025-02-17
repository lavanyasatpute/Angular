import { SelectorMatcher } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css'
})
export class ProductCatalogComponent {

  ProductList = ['laptop','mouse','speaker','keyboard'];

  CartData:string[] = [];
// $event: string;
  reciveData(cartProduct:string){
    if(cartProduct){
      this.CartData.push(cartProduct)
      alert("Added a succesfully product in cart list...")
      
    }
    
  }
}
