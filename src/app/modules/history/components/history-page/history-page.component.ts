import { Component, OnInit } from '@angular/core';
import { CurrentCall } from 'src/app/model/model';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
})
export class HistoryPageComponent implements OnInit {
  history: CurrentCall[] = [];

  constructor(
    private data: DataService,
    private auth: AuthService,
    public dialog: MatDialog,
    private routing: RoutingService
  ) {}

  ngOnInit(): void {
    this.history = this.data.getHistory();
    console.log(this.history);
  }
  deleteCallFromHistory(call: CurrentCall) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.history = this.data.deleteCall(call);
      }
    });
  }
  logout() {
    this.auth.logout();
    this.routing.openPage('login');
  }
}
