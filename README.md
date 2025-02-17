# Assessment Angular Module
### Problem Statement 01
Create a Component interaction with @Input and @Output

## Parent Component
```typescript
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
```
## Child Component
```typescript
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
```


### Problem Statement 18
Create a dynamic dropdown with event binding.

## Objectives
- Create a category selector component that:
  - Displays a dropdown of categories.
  - Dynamically updates a list of products based on the selected category.

## Implementation Steps
1. **Set up the Angular Module**:
    - Create a new Angular project.
    - Generate a new component named `CategorySelector`.

2. **Create the Category Dropdown**:
    - In the `CategorySelector` component, create a dropdown element to display categories.
    - Use Angular's `[(ngModel)]` to bind the selected category to a property in the component class.

3. **Handle Category Selection**:
    - Implement an event handler to capture the selected category.
    - Use the selected category to filter and update the list of products.

4. **Update Product List**:
    - Create a product list component to display products based on the selected category.
    - Use Angular's `*ngFor` directive to iterate over the products and display them.

## Example Code
### CategorySelector Component
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  //Create a categoris objects with data list
  categories = [
    { name: 'Fruits', data: ['apple', 'grapes', 'banana', 'orange'] },
    { name: 'Vegetable', data: ['spinach', 'potato', 'carrot', 'ginger'] },
    { name: 'Electronics', data: ['laptop', 'speaker', 'mobile', 'mouse'] }
  ];


  //Create a Globle veriable for display a data on HTML page
  selectedCategory: string = '';
  Data: string[] = [];

  //That fuction call when option are change 
  //I use a change event on that select tag
  changeCategory(category: string) {
    for (let data of this.categories) {
      if (data.name === category) {
        this.Data = data.data;
      }
    }
  }
}
```
