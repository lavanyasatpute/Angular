import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../Service/Product.model';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  form: FormGroup
  id: number = 0
  constructor(private productService: ProductService) {
    // this.form = this.formBuilder.group({});
    this.form = new FormGroup({
      id: new FormControl(this.id, [Validators.required]),
      PName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      PCategory: new FormControl('', [Validators.required, Validators.minLength(3)]),
      PPrice: new FormControl(Number, [Validators.required]),
      PImage: new FormControl('', [Validators.required, Validators.minLength(3)])
    });


  }
   
  addProduct(form: FormGroup) {
    this.id = this.productService.id
    this.form.controls['id'].setValue(this.id);
    // console.log(this.id);
    // console.log(form.value);
    this.productService.addProductIntoProductList(form.value)
  }


}
