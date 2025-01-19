import { Component } from '@angular/core';
import { VehicleModel } from '../../models/vehicle/vehicle.model';
import { AuthService } from '../../services/authService/auth.service';
import { VehicleService } from '../../services/vehicleService/vehicle.service';

@Component({
  selector: 'vehicle-overview',
  templateUrl: './vehicleOverview.component.html',
  styleUrls: ['./vehicleOverview.component.scss']
})
export class VehicleOverviewComponent {

  public vehicles: VehicleModel[] = [];

  public columns: { field: string, name: string }[] = [
    { field: 'name', name: 'Name' },
    { field: 'manufacturer', name: 'Manufacturer' },
    { field: 'model', name: 'Model' },
    { field: 'year', name: 'Year' },
    { field: 'type', name: 'Type' },
    { field: 'fuelType', name: 'Fuel Type' },
    { field: 'licensePlate', name: 'License Plate' },
    { field: 'active', name: '' }
  ];

  /**
   * 
   * @param authService 
   * @param vehicleService 
   */
  constructor(
    private authService: AuthService,
    private vehicleService: VehicleService
  ) {
    // fetch vehicle data
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }

  /**
   * Event listener: On sign out button click
   */
  public onSignOut(): void {
    this.authService.logout();
  }

  /**
   * Dispay appropriate icon class depending on given parameter
   * @param isActive 
   * @returns 
   */
  public getIconClass(isActive: boolean): string {
    return isActive ? 'pi pi-check' : 'pi pi-times';
  }
}