import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { DishwasherComponent } from './dishwasher/dishwasher.component';
import { AirFryerComponent } from './air-fryer/air-fryer.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrationComponent, LoginComponent, RouterModule, ShopComponent, HeaderComponent, WashingMachineComponent, DishwasherComponent, AirFryerComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FifthAngular';
}
