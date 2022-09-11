import { Injectable } from '@angular/core';
import { CurrentCall } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly historyPropertyName = '_callsAppHistory';

  private history: CurrentCall[] = [];
  constructor() {}
  getHistory() {
    let history = localStorage.getItem(this.historyPropertyName);
    if (history) {
      this.history = JSON.parse(history);
      return this.history;
    }
    return [];
  }
  saveCall(call: CurrentCall) {
    this.history.push(call);
    localStorage.setItem(
      this.historyPropertyName,
      JSON.stringify(this.history)
    );
  }
  deleteCall(call: CurrentCall) {
    let deletedIndex = this.history.findIndex((historyItem) => {
      return (
        call.finish === historyItem.finish && call.start === historyItem.start
      );
    });
    if (deletedIndex >= 0) {
      this.history.splice(deletedIndex, 1);
      localStorage.setItem(
        this.historyPropertyName,
        JSON.stringify(this.history)
      );
    }
    return this.history;
  }
}
