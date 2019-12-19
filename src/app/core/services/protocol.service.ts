import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {map, tap} from 'rxjs/operators';
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

  private protocols: IProtocol[];

  getProtocols(): Observable<IProtocol[]> {
    return this.http
      .get<IAPIGetProtocolsResponse>(this.url).pipe(map(data => data.results));
  }
}
