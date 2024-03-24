import { TestBed } from '@angular/core/testing';
import { CitySelectorService } from './city-selector.service';
import { citiesData } from '../../../data/citiesData';
import { take } from 'rxjs/operators';

describe('CitySelectorService', () => {
  let service: CitySelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitySelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable emitting an array of 3 cities', (done) => {
    service
      .getCities()
      .pipe(take(1))
      .subscribe({
        next: (cities) => {
          expect(cities.length).toBe(3);
          cities.forEach((city) => {
            expect(citiesData.data).toContain(city);
          });
          done();
        },
        error: done.fail,
      });
  });
});
