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
