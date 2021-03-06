import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchModel } from 'src/app/models/MatchModel';

@Injectable({
  providedIn: 'root'
})
export class MatchService {


  private MatchURL: string = '/api/match';

  constructor(private http: HttpClient) { }

  create(model: MatchModel): Observable<MatchService> {
    return this.http.post<MatchService>(this.MatchURL, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  update(model: MatchModel, id: number): Observable<MatchModel> {
    return this.http.put<MatchModel>(this.MatchURL + '/' + id, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  getMatch(): Observable<MatchModel[]> {
    return this.http.get<MatchModel[]>(this.MatchURL,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  createRoundMatches(id: number): Observable<MatchModel[]> {
    return this.http.get<MatchModel[]>(this.MatchURL + "/createRoundMatches/" + id,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  setMatchWinner(id: number, winnerId: number): Observable<any> {
    return this.http.get<any>(this.MatchURL + "/setMatchWinner/" + id + "/" + winnerId,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

}
