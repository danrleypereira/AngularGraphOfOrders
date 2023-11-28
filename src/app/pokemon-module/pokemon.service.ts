import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PokemonCard } from './types';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private baseApiUrl = 'https://api.pokemontcg.io/';

  constructor(private http: HttpClient) { }

  getCards(): Observable<PokemonCard[]> {
    const url = `${this.baseApiUrl}cards/`;
    return this.http.get<{data: PokemonCard[]}>(url).pipe(
      map(response => response.data)
    );
  }

  getCardById(id: string): Observable<PokemonCard> {
    const url = `${this.baseApiUrl}v2/cards/${id}`;
    let card = this.http.get<PokemonCard>(url).pipe(
      
      map(response => response.data)
    );
    return card;
  }
}
