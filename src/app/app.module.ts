import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './core/components/loginForm/loginForm.component';
import { VehicleService } from './core/services/vehicleService/vehicle.service';
import { VehicleOverviewComponent } from './core/components/vehicleOverview/vehicleOverview.component';

import { AuthService } from './core/services/authService/auth.service';

import { TrimCarNamePipe } from './core/pipes/trimCarName.pipe';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TrimCarNamePipe,
    VehicleOverviewComponent
  ],
  imports: [ 
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    PanelModule,
    ReactiveFormsModule,
    TableModule,
    ToolbarModule
  ],
  providers: [
    AuthService,
    VehicleService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
