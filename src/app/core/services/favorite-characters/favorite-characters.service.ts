import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCharactersService {

  private favoriteCharacters: number[] = [];
  private favoriteCharactersSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  constructor() {
    this.loadFavoriteCharacters();
  }

  public addFavoriteCharacter(id: number): void {
    if (!this.favoriteCharacters.includes(id)) {
      this.favoriteCharacters.push(id);
      this.notifyChanges();
    }
  }

  public removeFavoriteCharacter(id: number): void {
    const index = this.favoriteCharacters.indexOf(id);
    if (index !== -1) {
      this.favoriteCharacters.splice(index, 1);
      this.notifyChanges();
    }
  }

  public getFavoritesCharacter(): Observable<number[]> {
    return this.favoriteCharactersSubject.asObservable();
  }

  private loadFavoriteCharacters(): void {
    const storedHeroes = localStorage.getItem('favoriteHeroes');
    if (storedHeroes) {
      this.favoriteCharacters = JSON.parse(storedHeroes);
      this.favoriteCharactersSubject.next(this.favoriteCharacters);
    }
  }

  private saveFavoriteCharactersToLocalStorage(): void {
    localStorage.setItem('favoriteHeroes', JSON.stringify(this.favoriteCharacters));
  }

  private notifyChanges(): void {
    this.saveFavoriteCharactersToLocalStorage();
    this.favoriteCharactersSubject.next(this.favoriteCharacters);
  }

}
