import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Red-hair Shanks' },
      { id: 13, name: 'Eustass Captain Kid' },
      { id: 14, name: 'Trafalgar Law' },
      { id: 15, name: 'Gold D. Rodger' },
      { id: 16, name: 'Straw-hat Luffy' },
      { id: 17, name: 'Monkey D. Dragon' },
      { id: 18, name: 'Roronoa Zoro' },
      { id: 19, name: 'Portgas D. Ace' },
      { id: 20, name: 'Vinsmoke Sanji' }
    ];

    return {heroes};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


