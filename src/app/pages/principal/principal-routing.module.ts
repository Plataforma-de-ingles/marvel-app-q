import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: 'characters-list',
        component: CharactersListComponent
      },
      {
        path: 'character-detail/:id',
        component: CharacterDetailComponent
      },
      {
        path: '',
        redirectTo: 'characters-list',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
