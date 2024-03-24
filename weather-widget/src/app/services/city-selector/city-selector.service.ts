import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';
import { citiesData } from '../../../data/citiesData';

@Injectable({
  providedIn: 'root',
})
export class CitySelectorService {
  private cities = citiesData.data;

  constructor() {}

  getCities(): Observable<any[]> {
    //TODO: replace timer
    //return timer(0, 60000).pipe(map(() => this.selectRandomCities(3)));
    return timer(0, 600000).pipe(map(() => this.selectRandomCities(3)));
  }

  private selectRandomCities(count: number): any[] {
    const shuffled = this.cities.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
