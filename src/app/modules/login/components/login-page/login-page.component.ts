import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  login: string = '';
  password: string = '';
  constructor(private auth: AuthService, private routing: RoutingService) {}

  ngOnInit(): void {}
  loginUser() {
    this.auth.login(this.login, this.password);
    this.routing.openPage('');
  }
}
