import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  adminLogin(){
    localStorage.setItem('user','Admin');
    alert("Admin Login Successful...!");
  }

  userLogin(){
    localStorage.setItem('user','User');
    alert("User Login Successful...!");
  }
}
