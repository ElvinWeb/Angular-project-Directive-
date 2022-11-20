import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-task',
  templateUrl: './directive-task.component.html',
  styleUrls: ['./directive-task.component.css'],
})
export class DirectiveTaskComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  password: string;
  username: string;
  loginprocess: boolean = true;
  MenuOpened: boolean = true;
  display: boolean = true;

  Drinks: string = '';
  DisplayDrink(id: Number) {
    switch (id) {
      case 1: {
        this.Drinks = '1.Drink';
        this.display = true;
        break;
      }
      case 2: {
        this.Drinks = '2.Drink';
        this.display = true;
        break;
      }
      case 3: {
        this.Drinks = '3.Drink';
        this.display = true;
        break;
      }
      case 4: {
        this.Drinks = '4.Drink';
        this.display = true;
        break;
      }
    }
  }

  LoginDetails: Array<SignIn> = [
    {
      username: 'Admin',
      password: 'admin123',
    },
  ];

  LoginUser() {
    this.LoginDetails.forEach((_username: any, _password: any) => {
      if (this.username == 'Admin' && this.password == 'admin123') {
        this.loginprocess = !this.loginprocess;
      } else alert('Please enter the valid password and username');
    });
  }

  ToggleMenu() {
    this.MenuOpened = !this.MenuOpened;
  }
}

class SignIn {
  username: string;
  password: string;
}
