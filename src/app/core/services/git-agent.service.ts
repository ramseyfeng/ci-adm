import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {IAddAgentResponse, IAgent, IAgentsListResponse} from '../../shared/models/agent';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitAgentService {

  private startUrl = '/startGitAgents';

  private agentsUrl = '/gitAgents';

  private agentAddedSource = new Subject<IAgent>();

  agentAdded$ = this.agentAddedSource.asObservable();

  constructor(private http: HttpClient) { }

  addAgent(agent: IAgent) {
    this.agentAddedSource.next(agent);
  }

  startAgent(agent): Observable<IAgent> {
    return this.http.post<IAddAgentResponse>(this.startUrl, agent).pipe(
      tap(data => console.log(JSON.stringify(data))),
      map(data => data.results)
    );
  }

  getAgents(): Observable<IAgent[]> {
    return this.http.get<IAgentsListResponse>(this.agentsUrl).pipe(map(data => data.results));
  }

}
