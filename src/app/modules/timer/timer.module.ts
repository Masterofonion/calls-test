import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPipe } from './pipes/timer.pipe';

@NgModule({
  declarations: [TimerPipe],
  exports: [TimerPipe],
  imports: [CommonModule],
})
export class TimerModule {}
