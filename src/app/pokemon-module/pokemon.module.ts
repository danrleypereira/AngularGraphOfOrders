import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './card/card.component';
import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    PokemonCardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PokemonService
  ]
})

export class PokemonModule { 

}
