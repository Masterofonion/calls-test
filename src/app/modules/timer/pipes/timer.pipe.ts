import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
})
export class TimerPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    let minutes = Math.floor(value / 60);
    let seconds = value - minutes * 60;
    let minuteStr = `${minutes >= 10 ? minutes : '0' + minutes}`;
    let secondsStr = `${seconds >= 10 ? seconds : '0' + seconds}`;

    return `${minuteStr}:${secondsStr}`;
  }
}
