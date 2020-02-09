import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IFeature, IFeaturesResponse} from '../../shared/models/feature';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  url = '/features';

  constructor(private http: HttpClient) { }

  getFeatures(protocolId: string): Observable<IFeature[]> {
    return this.http.get<IFeaturesResponse>(`${this.url}/${protocolId}`).pipe(
      shareReplay(1),
      map(data => data.results)
    );
  }

}
