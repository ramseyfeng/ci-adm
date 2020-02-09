import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IRegion, IRegionsResponse} from '../../shared/models/region';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  url = '/locations'

  constructor(private http: HttpClient) { }

  getRegions(envName, tenant, projectId): Observable<IRegion[]> {

    const params = new HttpParams();
    params.set('envName', envName);
    params.set('tenant', tenant);
    params.set('projectId', projectId);
    return this.http.get<IRegionsResponse>(this.url, {params})
      .pipe(
        map(data => data.results)
      );
  }

}
