import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  localEmail = localStorage.getItem("email");
  localUsername = localStorage.getItem("username");
  localPassword = localStorage.getItem("password");

  registrationForm = new FormGroup({
    email: new FormControl(this.localEmail, Validators.required),
    username: new FormControl(this.localUsername, Validators.required),
    password: new FormControl(this.localPassword, Validators.required)
  });

  onSubmitRegistration() {
    if (this.validateData()) {
      window.location.href = "#"; // redirect to webshop products
      localStorage.setItem("email", this.registrationForm.value.email as string);
      localStorage.setItem("username", this.registrationForm.value.username as string);
      localStorage.setItem("password", this.registrationForm.value.password as string);
    } else {
      alert("Email, username, or password is invalid!");
    }
  }

  validateData() {
    if (
      !(this.registrationForm.value.email as string).includes('@') ||
      ((this.registrationForm.value.username) as string).length < 6 ||
      (this.registrationForm.value.password as string).length < 6) {
      return false
    }
    else {
      return true
    }
  }
}
