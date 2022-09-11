import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallsPageComponent } from './components/calls-page/calls-page.component';
import { CallsRoutingModule } from './calls-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { TimerPipe } from 'src/app/pipes/timer.pipe';

@NgModule({
  declarations: [CallsPageComponent, TimerPipe],
  // exports: [CallsPageComponent],
  imports: [
    CommonModule,
    CallsRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class CallsModule {}
