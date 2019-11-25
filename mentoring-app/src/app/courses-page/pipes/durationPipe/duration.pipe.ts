import { Pipe, PipeTransform } from '@angular/core';

const HOUR_MINUTES = 60;

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): string {
    if (duration >= HOUR_MINUTES) {
      return `${Math.floor(duration / HOUR_MINUTES)}hr ${duration % HOUR_MINUTES}min`;
    } else if (duration == null) {
      return '';
    } else {
        return `${duration}min`;
    }
  }

}
