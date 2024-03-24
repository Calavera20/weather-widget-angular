import {
  ComponentFixture,
  TestBed,
  discardPeriodicTasks,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CitySelectorService } from './services/city-selector/city-selector.service';
import { WeatherService } from './services/weather/weather.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { apiResponseExample } from '../data/testData';
import { citiesData } from '../data/citiesData';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockCitySelectorService: jasmine.SpyObj<CitySelectorService>;
  let mockWeatherService: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    mockCitySelectorService = jasmine.createSpyObj('CitySelectorService', [
      'getCities',
    ]);
    mockWeatherService = jasmine.createSpyObj('WeatherService', [
      'getWeatherData',
    ]);

    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule],
      providers: [
        { provide: CitySelectorService, useValue: mockCitySelectorService },
        { provide: WeatherService, useValue: mockWeatherService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should subscribe and fetch cities data on init', fakeAsync(() => {
    const cities = [citiesData.data[0], citiesData.data[1], citiesData.data[2]];
    mockCitySelectorService.getCities.and.returnValue(of(cities));
    mockWeatherService.getWeatherData.and.returnValue(of(apiResponseExample));

    fixture.detectChanges();
    tick(5000);

    expect(mockCitySelectorService.getCities).toHaveBeenCalled();
    expect(mockWeatherService.getWeatherData).toHaveBeenCalledTimes(
      cities.length
    );
    expect(component.cities.length).toBe(cities.length);
    discardPeriodicTasks();
  }));

  it('should unsubscribe on destroy', () => {
    component.ngOnDestroy();

    expect(component['subscription'].closed).toBeTruthy();
    expect(component['forkSubscription'].closed).toBeTruthy();
  });
});
