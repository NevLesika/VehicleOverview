import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VehicleModel } from '../../models/vehicle/vehicle.model';
import { VEHICLES } from '../../models/vehicle/vehicle.constants';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor() {

  }

  /**
   * Fetch vehicles
   * @returns 
   */
  public getVehicles(): Observable<VehicleModel[]> {
    return of(VEHICLES);
  }
}
