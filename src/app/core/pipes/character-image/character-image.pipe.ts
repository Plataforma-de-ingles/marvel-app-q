import { Pipe, PipeTransform } from '@angular/core';
import { Thumbnail } from '../../models/characters-response..type';

@Pipe({
  name: 'characterImage'
})
export class CharacterImagePipe implements PipeTransform {

  transform(thumbnail:Thumbnail): string {
    return `${thumbnail.path}.${thumbnail.extension}`
  }

}
