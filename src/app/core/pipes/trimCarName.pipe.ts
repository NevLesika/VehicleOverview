import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCarName'
})
export class TrimCarNamePipe implements PipeTransform {

  /**
   * Perform a transformation of the given value to capture everything before ## symbols
   * @param value 
   * @returns 
   */
  public transform(value: string): string {
    if (!value) {
      return value;
    }

    const match = value.match(/^(.+?)\s*##/);
    return match ? match[1] : value;
  }
}