import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game, GetGamesResponse } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  public games: Game[] = [];

  constructor( private gameService: GameService ) { }

  ngOnInit(): void {

    this.gameService.getNominated()
        .subscribe( (res: GetGamesResponse) => {
          console.log(res);
          this.games = res.games;
          console.log(this.games);
        });
  }

  voteGame( id: string ){
    this.gameService.voteGame(id)
        .subscribe( (res: any) => {
          console.log(res);
          if( res.ok )
          {
            Swal.fire({
              title: 'Success',
              text: res.msg,
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          } else {
            Swal.fire({
              title: 'Error',
              text: res.msg,
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          }
        })
  }

}
