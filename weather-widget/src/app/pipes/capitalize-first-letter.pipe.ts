import { Pipe, PipeTransform } from '@angular/core';

const toTitleCase = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

@Pipe({
  name: 'capitalizeFirstLetter',
  standalone: true,
})
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(value: any): any {
    if (value) {
      return toTitleCase(value);
    } else {
      return value;
    }
  }
}
