import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PokemonCard } from '../types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class PokemonCardComponent implements OnInit {
  card!: Observable<PokemonCard>;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.card = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id')!;
        // if(id !== null)
          return this.pokemonService.getCardById(id);
      })
    );
  }
}
