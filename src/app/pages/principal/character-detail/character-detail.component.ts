import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/core/services/characters/characters.service';
import { Character } from '../../../core/models/characters-response..type';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  public character!: Character;
  private idCharacter = this.activatedRoute.snapshot.params['id'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getCharacterData();
  }

  private getCharacterData(): void {
    this.charactersService.getCharacterById(this.idCharacter).subscribe(({data: { results }}) => {
      this.character = results[0];
    })
  }

}
