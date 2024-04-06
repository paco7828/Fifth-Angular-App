import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  localEmail = localStorage.getItem("email");
  localPassword = localStorage.getItem("password");

  loginForm = new FormGroup({
    email: new FormControl(this.localEmail, Validators.required),
    password: new FormControl(this.localPassword, Validators.required)
  });

  onSubmitLogin() {
    if (!(this.localEmail === null || this.localPassword === null)) {
      window.location.href = "#"; // redirect to webshop products
    }
    else {
      alert("You haven't registrated yet!")
    }
    return true;
  }
}
