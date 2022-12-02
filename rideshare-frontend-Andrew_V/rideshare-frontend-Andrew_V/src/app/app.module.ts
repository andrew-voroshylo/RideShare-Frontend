import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverRegisterComponent } from './components/driver-register/driver-register.component';
import { RiderRegisterComponent } from './components/rider-register/rider-register.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserService } from './services/user-service/user.service';
import { CarService } from './services/car-service/car.service';
import { BatchService } from './services/batch-service/batch.service';

@NgModule({
  declarations: [
    AppComponent,
    DriverRegisterComponent,
    RiderRegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    CarService,
    BatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
