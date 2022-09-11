import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private router: Router) {}
  openPage(pageName: string) {
    this.router.navigateByUrl(pageName);
  }
}
