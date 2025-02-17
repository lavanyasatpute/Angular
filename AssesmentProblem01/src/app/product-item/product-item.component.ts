import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() List: string[] = [];

  @Output() product = new EventEmitter<string>()
  sendData(product:string){
    this.product.emit(product);
  }
}
