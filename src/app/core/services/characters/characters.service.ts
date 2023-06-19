import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharactersResponse } from '../../models/characters-response..type';
import { Observable } from 'rxjs';
import { RequestParameter } from '../../models/request-parameters.type';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  public getAllCharacters({orderBy, offset, limit}: RequestParameter): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(`${environment.api}/characters?orderBy=${orderBy}&limit=${limit}&offset=${offset}`);
  }

  public getCharacterByName({searchText, orderBy}: RequestParameter): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(`${environment.api}/characters?name=${encodeURIComponent(searchText!)}&orderBy=${orderBy}`);
  }

  public getCharacterById(id: number): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(`${environment.api}/characters/${id}`);
  }
}
