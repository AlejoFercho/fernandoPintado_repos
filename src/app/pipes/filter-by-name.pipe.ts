import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(pokemons: any[], name: string): any[] {
    name = name.trim().toLowerCase();

    if (name) {
      return pokemons.filter((o) => o.name.toLowerCase().includes(name));
    } else {
      return pokemons;
    }
  }

}
