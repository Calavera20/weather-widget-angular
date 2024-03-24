import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { config } from '../../config';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../model/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly apiService: ApiService) {}

  public getWeatherData(cityData: any): Observable<ApiResponse> {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&appid=${config.apiKey}&units=metric`;
    return this.apiService.getData(url);
  }
}
