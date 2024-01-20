import { Tattoo } from './../models/tattoo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artist',
  standalone: true
})
export class ArtistPipe implements PipeTransform {

  transform(tattoos: Tattoo[],selectedArtist: String): Tattoo [] {
    if(selectedArtist === 'All'){
      return tattoos;
    }

    let result: Tattoo [] =[];
    for (const tat of tattoos) {
      if(tat.artist === selectedArtist){
        result.push(tat);
      }

    }
    return result;
  }

}
