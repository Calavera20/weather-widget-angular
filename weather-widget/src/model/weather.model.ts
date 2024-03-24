export interface ApiResponse {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: System;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Coordinates {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface System {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export enum WeatherMain {
  THUNDERSTORM = 'Thunderstorm',
  CLEAR = 'Clear',
  DRIZZLE = 'Drizzle',
  RAIN = 'Rain',
  SNOW = 'Snow',
  CLOUDS = 'Clouds',
}
