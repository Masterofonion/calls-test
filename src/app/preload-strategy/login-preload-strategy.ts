import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../services/auth.service';
@Injectable({ providedIn: 'root' })
export class LoginPreloadStrategy implements PreloadingStrategy {
  constructor(private auth: AuthService) {}
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && !route.data['isLoginRoute']) {
      return fn();
    } else {
      return of(null);
      // if (this.auth.isUserLoggedIn()) {
      //   return of(null);
      // } else {
      //   return fn();
      // }
    }
  }
}
