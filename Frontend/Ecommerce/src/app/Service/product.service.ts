import { Injectable } from '@angular/core';
import { IProduct } from './Product.model';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductList: IProduct[] = [{
    id: 1,
    PName: "Laptop",
    PCategory: "Electronics",
    PPrice: 1200,
    PImage: "laptop.jpg"
  },
  {
    id: 2,
    PName: "Smartphone",
    PCategory: "Electronics",
    PPrice: 800,
    PImage: "smartphone.jpg"
  },
  {
    id: 3,
    PName: "Coffee Maker",
    PCategory: "Home Appliances",
    PPrice: 150,
    PImage: "coffeemaker.jpg"
  },
  {
    id: 4,
    PName: "Headphones",
    PCategory: "Electronics",
    PPrice: 200,
    PImage: "headphones.jpg"
  },
  {
    id: 5,
    PName: "Blender",
    PCategory: "Home Appliances",
    PPrice: 100,
    PImage: "blender.jpg"
  },
  {
    id: 6,
    PName: "Smartwatch",
    PCategory: "Electronics",
    PPrice: 250,
    PImage: "smartwatch.jpg"
  },
  {
    id: 7,
    PName: "Microwave",
    PCategory: "Home Appliances",
    PPrice: 300,
    PImage: "microwave.jpg"
  },
  {
    id: 8,
    PName: "Camera",
    PCategory: "Electronics",
    PPrice: 900,
    PImage: "camera.jpg"
  },
  {
    id: 9,
    PName: "Vacuum Cleaner",
    PCategory: "Home Appliances",
    PPrice: 400,
    PImage: "vacuum.jpg"
  },
  {
    id: 10,
    PName: "Air Purifier",
    PCategory: "Home Appliances",
    PPrice: 350,
    PImage: "airpurifier.jpg"
  }];
  orderList:IProduct[]=[];
  cart: IProduct[] = [];
  //we use reply subject to emit the product list  ,by this same data will be there in display comp. and add product
  private Product = new ReplaySubject<IProduct[]>(1)
  private Cart = new ReplaySubject<IProduct[]>(1);
  private order = new ReplaySubject<IProduct[]>(1);
  order$ = this.order.asObservable();
  Cart$ = this.Cart.asObservable();
  Product$ = this.Product.asObservable();

  id: number = 11
  constructor() {
    
    this.Product.next(this.ProductList);
    this.Cart.next(this.cart);
    this.order.next(this.orderList);
  }

  //add a product into product list
  addProductIntoProductList(product: IProduct) {
    this.ProductList.push(product);
    this.id = this.id + 1;
  }

  addToCart(item: IProduct) {
    this.cart.push(item);
  }

  removeFromCart(index: number) {
    if (index > -1 && index < this.cart.length) {
      this.cart.splice(index, 1); // Remove the element at the given index
    }
  }

  addOrderList(list:IProduct[]){
    for(let item of list){
      this.orderList.push(item)
    } 
    this.cart = [];
    this.Cart.next(this.cart);
  }
}
