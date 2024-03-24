import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ApiResponse, WeatherMain } from '../../../model/weather.model';

@Component({
  selector: 'app-weather-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-data.component.html',
  styleUrl: './weather-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherDataComponent {
  @Input() city?: ApiResponse;

  constructor() {}

  public getImageForWeather(weather: string) {
    const route = '../../../../assets/animated/';
    switch (weather) {
      case WeatherMain.CLEAR:
        return route + 'day.svg';
      case WeatherMain.CLOUDS:
        return route + 'cloudy.svg';
      case WeatherMain.DRIZZLE:
        return route + 'rainy-2.svg';
      case WeatherMain.RAIN:
        return route + 'rainy-6.svg';
      case WeatherMain.SNOW:
        return route + 'snowy-6.svg';
      case WeatherMain.THUNDERSTORM:
        return route + 'thunder.svg';
      default:
        return '';
    }
  }

  public navigateToDetails(id: number) {
    window.open(`https://openweathermap.org/city/${id}`, '_blank');
  }
}
