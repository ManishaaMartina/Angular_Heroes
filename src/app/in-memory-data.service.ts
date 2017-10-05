import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Black Widow' },
      { id: 2, name: 'Avengers' },
      { id: 3, name: 'Guardians of Galaxy' },
      { id: 4, name: 'X-men' },
      { id: 5, name: 'Iron Man' },
      { id: 6, name: 'Captain America' },
      { id: 7, name: 'Thor' },
      { id: 8, name: 'Hulk' },
      { id: 9, name: 'Wolverine' },
      { id: 10, name: 'Dr.Strange' }
    ];
    return {heroes};
  }
}
