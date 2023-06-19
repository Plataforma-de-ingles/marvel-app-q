import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './character-detail/character-detail.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    CharactersListComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PrincipalModule { }
