import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { HistoryRoutingModule } from './history-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { TimerModule } from '../timer/timer.module';

@NgModule({
  declarations: [HistoryPageComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    TimerModule,
  ],
})
export class HistoryModule {}
