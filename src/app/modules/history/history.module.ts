import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  declarations: [HistoryPageComponent],
  imports: [CommonModule, HistoryRoutingModule],
})
export class HistoryModule {}
