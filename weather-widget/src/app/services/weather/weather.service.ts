import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { config } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly apiService: ApiService) {}

  getWeatherData(cityData: any) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&appid=${config.apiKey}&units=metric`;
    return this.apiService.getData(url);
  }
}
