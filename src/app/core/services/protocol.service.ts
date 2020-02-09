import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {map, shareReplay, tap} from 'rxjs/operators';
import {
  IAPIGetProtocolsResponse,
  IProtocol
} from '../../shared/models/protocol';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {
  constructor(private http: HttpClient) {
  }

  url = '/protocols';

  protocols$: Observable<IProtocol[]> = this.http
    .get<IAPIGetProtocolsResponse>(this.url).pipe(
      shareReplay(1),
      map(data => data.results));

}
