import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/authService/auth.guard';
import { LoginFormComponent } from './core/components/loginForm/loginForm.component';
import { VehicleOverviewComponent } from './core/components/vehicleOverview/vehicleOverview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'overview',
    component: VehicleOverviewComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '**', 
    redirectTo: '/login' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
