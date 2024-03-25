import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { CitySelectorService } from './services/city-selector/city-selector.service';
import { Subscription, forkJoin, timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather/weather.service';
import { ApiResponse } from '../model/weather.model';
import { CityData } from '../data/citiesData';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherDataComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  cities: ApiResponse[] = [];
  private subscription: Subscription = new Subscription();
  private forkSubscription: Subscription = new Subscription();
  private timerSubscription: Subscription = new Subscription();

  constructor(
    private readonly citySelectorService: CitySelectorService,
    private readonly weatherService: WeatherService,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.startFetching();
  }

  private startFetching() {
    this.subscription = this.citySelectorService
      .getCities()
      .subscribe((cities) => {
        this.timerSubscription.unsubscribe();
        this.timerSubscription = timer(0, 10000).subscribe(() => {
          this.forkSubscription = this.fetchCitiesData(cities).subscribe(
            (res) => {
              this.cities = res;
              this.cd.detectChanges();
            }
          );
        });
      });
  }

  private fetchCitiesData(selectedCities: CityData[]) {
    return forkJoin([
      this.weatherService.getWeatherData(selectedCities[0]),
      this.weatherService.getWeatherData(selectedCities[1]),
      this.weatherService.getWeatherData(selectedCities[2]),
    ]);
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
    this.forkSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }
}
