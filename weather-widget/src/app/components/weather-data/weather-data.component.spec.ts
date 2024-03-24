import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherDataComponent } from './weather-data.component';
import { CommonModule } from '@angular/common';
import { WeatherMain } from '../../../model/weather.model';
import { apiResponseExample } from '../../../data/testData';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherDataComponent', () => {
  let component: WeatherDataComponent;
  let fixture: ComponentFixture<WeatherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, HttpClientTestingModule, WeatherDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly bind @Input city', () => {
    const testCity = apiResponseExample;
    component.city = testCity;
    fixture.detectChanges();
    expect(component.city).toEqual(testCity);
  });

  describe('getImageForWeather', () => {
    const route = '../../../../assets/animated/';
    const testCases = [
      { weather: WeatherMain.CLEAR, expected: `${route}day.svg` },
      { weather: WeatherMain.CLOUDS, expected: `${route}cloudy.svg` },
      { weather: WeatherMain.DRIZZLE, expected: `${route}rainy-2.svg` },
      { weather: WeatherMain.RAIN, expected: `${route}rainy-6.svg` },
      { weather: WeatherMain.SNOW, expected: `${route}snowy-6.svg` },
      { weather: WeatherMain.THUNDERSTORM, expected: `${route}thunder.svg` },
      { weather: 'UNKNOWN', expected: '' },
    ];

    testCases.forEach(({ weather, expected }) => {
      it(`should return correct image path for ${weather}`, () => {
        expect(component.getImageForWeather(weather)).toEqual(expected);
      });
    });
  });

  it('navigateToDetails should open a new tab with correct URL', () => {
    const spy = spyOn(window, 'open');
    const testId = 123;
    component.navigateToDetails(testId);
    expect(spy).toHaveBeenCalledWith(
      `https://openweathermap.org/city/${testId}`,
      '_blank'
    );
  });
});
