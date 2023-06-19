import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterImagePipe } from './character-image/character-image.pipe';



@NgModule({
  declarations: [CharacterImagePipe],
  imports: [
    CommonModule
  ],
  exports: [CharacterImagePipe]
})
export class PipesModule { }
