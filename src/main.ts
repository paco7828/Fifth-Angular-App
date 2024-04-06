import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { RegistrationComponent } from './app/registration/registration.component';
import { ShopComponent } from './app/shop/shop.component';
import { WashingMachineComponent } from './app/washing-machine/washing-machine.component';
import { AirFryerComponent } from './app/air-fryer/air-fryer.component';
import { DishwasherComponent } from './app/dishwasher/dishwasher.component';
import { MainComponent } from './app/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'washing-machine', component: WashingMachineComponent },
  { path: 'air-fryer', component: AirFryerComponent },
  { path: 'dishwasher', component: DishwasherComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));