import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/core/models/characters-response..type';
import { FavoriteCharactersService } from 'src/app/core/services/favorite-characters/favorite-characters.service';

@Component({
  selector: 'app-principal-card',
  templateUrl: './principal-card.component.html',
  styleUrls: ['./principal-card.component.scss']
})
export class PrincipalCardComponent implements OnInit {

  @Input() character!: Character;
  @Output() onClickImage = new EventEmitter<number>();
  public listFavoritesId: number[] = [];

  constructor(private favoriteCharactersService: FavoriteCharactersService) { }

  ngOnInit(): void {
    this.favoriteCharactersService.getFavoritesCharacter().subscribe(favorites => {
      this.listFavoritesId = favorites;
    })
  }

  get isFavorite() {
    return this.listFavoritesId.find( favoriteId => favoriteId === this.character.id);
  }

  public clickImage(): void {
    this.onClickImage.emit(this.character.id);
  }

  public addFavorite(): void {
    this.favoriteCharactersService.addFavoriteCharacter(this.character.id)
  }

  public removeFavorite(): void {
    this.favoriteCharactersService.removeFavoriteCharacter(this.character.id)
  }

  public clickFavorite(): void {
    this.isFavorite ? this.removeFavorite() : this.addFavorite();
  }
}
