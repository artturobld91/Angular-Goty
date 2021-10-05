import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  games: any[] = [];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.firestore.collection('goty').valueChanges()
        .pipe(
            map( (res: any[]) => {
                //return res.map( ({ name, votes}) => ({ label:name, data:votes }) )
                return res.map( game => {
                  return {
                    label: game.name,
                    data: game.votes
                  }
                })
            } )
        )
        .subscribe( games => {
          console.log(games);
          this.games = games;
        });
  }

}
