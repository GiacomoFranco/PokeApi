import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { PokemonGalleryComponent } from './pokemon-gallery/pokemon-gallery.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPokemonComponent,
    PokemonGalleryComponent,
    PokemonStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
