import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';
import { CityData, citiesData } from '../../../data/citiesData';

@Injectable({
  providedIn: 'root',
})
export class CitySelectorService {
  private cities = citiesData.data;

  constructor() {}

  public getCities(): Observable<CityData[]> {
    return timer(0, 60000).pipe(map(() => this.selectRandomCities(3)));
  }

  private selectRandomCities(count: number): CityData[] {
    const shuffled = this.cities.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
