import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters/characters.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectOrder } from 'src/app/core/models/select.type';
import { Character, CharactersResponse, Data } from 'src/app/core/models/characters-response..type';
import { Router } from '@angular/router';
import { listOptions } from './characters-list.consts';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  public searchForm!: FormGroup;
  public characters: Character[] = [];
  public paginatorData!: Omit<Data, 'results'>;
  public listOptions: SelectOrder[] = listOptions;

  constructor(
    private charactersService: CharactersService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getCharacters();
  }

  public onSearch(): void {
    this.searchForm.valid ? this.getCharacterByName() : this.getCharacters();
  }

  public getCharacters(): void {
    this.charactersService.getAllCharacters(this.searchForm.value).subscribe((response) => this.setData(response))
  }

  public onChangePaginator(index: number): void {
    this.searchForm.get('offset')?.setValue(index);
    this.getCharacters();
  }

  public goToDetail(id: number): void {
    this.router.navigate(['/character-detail', id]);
  }

  public setData({data: {results, ...rest}}: CharactersResponse): void {
    this.characters = results;
    this.paginatorData = rest;
  }

  private getCharacterByName(): void {
    this.charactersService.getCharacterByName(this.searchForm.value).subscribe((response) => this.setData(response))
  }

  private initializeForm(): void {
    this.searchForm = this.formBuilder.group({
      searchText: ['', [Validators.required]],
      orderBy: [this.listOptions[0].value, [Validators.required]],
      offset: [0, [Validators.required]],
      limit: [20, [Validators.required]]
    });
  }

}
