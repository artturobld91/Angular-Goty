import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game, GetGamesResponse } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  serviceGames: GetGamesResponse = { ok:true, games:[]  };

  constructor( private httpClient: HttpClient) { }

  getNominated() {

    if(this.serviceGames.games.length > 0)
    {
      console.log('from cache')
      return of(this.serviceGames);
    } else {
      console.log('from internet')
      return this.httpClient.get<GetGamesResponse>(`${ environment.url }/api/goty`)
              .pipe(
                tap(
                  response => this.serviceGames = response
                )
              );
    }
    
  }

  voteGame( id: string ) {

    return this.httpClient.post(`${ environment.url }/api/goty/${ id }`, {})
            .pipe(
              catchError( err => {
                console.log('Error in the request');
                console.log(err);
                return of( err.error )
              } )
            );

  }

}
