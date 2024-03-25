export const citiesData = {
  data: [
    { name: 'Łódź', lat: 51.759445, lon: 19.457216 },
    { name: 'Warszawa', lat: 52.22977, lon: 21.01178 },
    { name: 'Berlin', lat: 52.5244, lon: 13.4105 },
    { name: 'New York', lat: 40.71427, lon: -74.00597 },
    { name: 'London', lat: 51.5073219, lon: -0.1276474 },
  ],
};

export interface CityData {
  name: string;
  lat: number;
  lon: number;
}
