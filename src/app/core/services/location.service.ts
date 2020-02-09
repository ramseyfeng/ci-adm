import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ILocation} from '../../shared/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations = [
    {
      id: 0,
      name: 'cloud'
    },
    {
      id: 1,
      name: 'on-premise'
    },
    {
      id: 2,
      name: 'hybrid'
    }
  ];

  constructor() {
  }

  locations$: Observable<ILocation[]> = of(this.locations);
}
