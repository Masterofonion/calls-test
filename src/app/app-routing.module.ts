import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPreloadStrategy } from './preload-strategy/login-preload-strategy';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/calls/calls.module').then(
        (module) => module.CallsModule
      ),
    data: { isLoginRoute: false },
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./modules/history/history.module').then(
        (module) => module.HistoryModule
      ),
    data: { isLoginRoute: false },
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(
        (module) => module.LoginModule
      ),
    data: { isLoginRoute: true },
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: LoginPreloadStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
